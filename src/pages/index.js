import "../pages/index.css"
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js"
import Popup from "../components/Popup.js";
import { profileName, popupAvatar, elementDeleteButton, popupButtonSave, profileJob, popupConfirm, popupEditElement, popupAddElement, profileAddButton, profileEditButton, popupCards, nameInput, jobInput, validationConfig, formElementEditPopup, formElementAddPopup, profileAvatar, popupFormAvatar, popupButtonCreate } from "../utils/constants.js";

//вызов валидации форм
export const formValidatorEdit = new FormValidator(validationConfig, formElementEditPopup);
export const formValidatorAdd = new FormValidator(validationConfig, formElementAddPopup);
export const formValidatorAvatar = new FormValidator(validationConfig, popupFormAvatar);
formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();
formValidatorAvatar.enableValidation();

//глобальное обьявление классов
const popupImage = new PopupWithImage(popupCards);
const userInfo = new UserInfo(profileName, profileJob);
const popupConfirms = new Popup(popupConfirm)

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-27',
    headers: {
        authorization: '3241e824-00fc-4fae-a12a-df6ad380713b',
        'Content-Type': 'application/json'
    },

});

//Открытие попапа Edit.
profileEditButton.addEventListener("click", function(e) {
    popupWithFormEdit.open();
    const profileInfo = userInfo.getUserInfo()
    nameInput.value = profileInfo.name
    jobInput.value = profileInfo.job

});

//создаем карточку
function createCard(data) {
    const card = new Card(data, ".element-template", handleCardClick, handleLikePut, openPopupConfirm);
    const cardElement = card.generatePlaceCard();
    return cardElement;
}
//DELETE//открытие попапа удаления//удаление карточки с сервера
function openPopupConfirm(element, cardId) {
    popupConfirms.open()
    elementDeleteButton.addEventListener("click", () => {
        elementDeleteButton.textContent = "Удаление...";
        api.deleteCardFromServer(cardId)
            .then(() => {
                element.remove()

            })
            .finally(() => {
                popupConfirms.close();
                elementDeleteButton.textContent = "Да";
            });
    })
    popupConfirms.setEventListeners()
}

//открытие попапа с карточками
function handleCardClick(name, link) {
    popupImage.open(name, link);

};

popupImage.setEventListeners()

//отправка картинки аватара на сервер
const popupAvatarUserInfo = new PopupWithForm(popupAvatar, (item) => {
    popupButtonSave.textContent = "Сохранение..."
    profileAvatar.src = item.link
    api.editAvatar(item)
        .then(item => {
            userInfo.saveAvatar(item)
        })

    .finally(() => {

        popupButtonSave.textContent = "Сохранить"
    });
    formValidatorAvatar.disableButton();
})

popupAvatarUserInfo.setEventListeners()

profileAvatar.addEventListener("click", () => popupAvatarUserInfo.open());

//GET//информация пользователя
api.updateUserInfo()
    .then(data => {
        profileName.textContent = data.name
        profileJob.textContent = data.about
        profileAvatar.src = data.avatar


    })

//GET//отрисовка и загрузка карточек
api.getInitialCards()
    .then(data => {
        const cardList = new Section({
            items: data,
            renderer: (item) => {
                const addedCard = createCard(item);
                cardList.addItem(addedCard);

            }
        }, ".elements")

        cardList.renderItems();
        //POST//добавление новой карточки 
        const addedNewCard = new PopupWithForm(popupAddElement, (item) => {
            popupButtonCreate.textContent = "Сохранение..."
            api.addNewCard(item)
                .then(item => {
                    const newAddedCard = createCard(item);
                    cardList.setItem(newAddedCard);
                    formValidatorAdd.disableButton();
                })
                .finally(() => {
                    popupButtonCreate.textContent = "Создать"
                });
        })
        addedNewCard.setEventListeners()
        profileAddButton.addEventListener("click", () => addedNewCard.open());

    })
    //PATCH//редактирование информации о пользователе
const popupWithFormEdit = new PopupWithForm(popupEditElement, (item) => {
    popupButtonSave.textContent = "Сохранение..."
    api.editProfile(item)
        .then(() => {
            userInfo.setUserInfo(item)
        })
        .finally(() => {

            popupButtonSave.textContent = "Сохранить"
        });
})
popupWithFormEdit.setEventListeners()
    //PUT//DELETE//постановка и удаление лайка
function handleLikePut(elementLikeButton, cardId, counter) {
    elementLikeButton.classList.toggle("element__like-button_active")
    if (elementLikeButton.classList.contains("element__like-button_active")) {
        api.putLike(cardId)

        .then(data => {
            counter.textContent = data.likes.length;


        })
    } else {
        api.deleteLike(cardId)
            .then(data => {
                counter.textContent = data.likes.length;


            })
    }

}