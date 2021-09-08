import "../pages/index.css"
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js"
import { profileName, popupAvatar, elementDeleteButton, popupButtonSave, profileJob, popupConfirm, popupEditElement, popupAddElement, profileAddButton, profileEditButton, popupCards, nameInput, jobInput, validationConfig, formElementEditPopup, formElementAddPopup, profileAvatar, popupFormAvatar, popupButtonCreate } from "../utils/constants.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";

//вызов валидации форм
export const formValidatorEdit = new FormValidator(validationConfig, formElementEditPopup);
export const formValidatorAdd = new FormValidator(validationConfig, formElementAddPopup);
export const formValidatorAvatar = new FormValidator(validationConfig, popupFormAvatar);
formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();
formValidatorAvatar.enableValidation();
let userId;
//глобальное обьявление классов
const popupImage = new PopupWithImage(popupCards);
const userInfo = new UserInfo(profileName, profileJob);
const popupConfirms = new PopupWithSubmit(popupConfirm);

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
    const card = new Card(data, ".element-template", userId, handleCardClick, handlerAddLike, handlerRemoveLike, openPopupConfirm);
    const cardElement = card.generatePlaceCard();
    return cardElement;
}

//DELETE//открытие попапа удаления//удаление карточки с сервера
function openPopupConfirm(element, cardId) {
    popupConfirms.open()
    popupConfirms.setSubmitCallback(() => {
        elementDeleteButton.textContent = "Удаление...";
        api.deleteCardFromServer(cardId)
            .then(() => {
                element.remove()

            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupConfirms.close();
                elementDeleteButton.textContent = "Да";
            });
    })
}

//открытие попапа с карточками
function handleCardClick(name, link) {
    popupImage.open(name, link);
};

//отправка картинки аватара на сервер
const popupAvatarUserInfo = new PopupWithForm(popupAvatar, (data) => {
    popupButtonSave.textContent = "Сохранение..."
    api.editAvatar(data)
        .then(data => {
            profileAvatar.src = data.avatar;
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupButtonSave.textContent = "Сохранить"
            popupAvatarUserInfo.close()
        });
    formValidatorAvatar.disableButton();
})

//GET//отрисовка и загрузка карточек
Promise.all([
        api.updateUserInfo(),
        api.getInitialCards(),
    ])
    .then(([data, initialCards]) => {
        profileName.textContent = data.name
        profileJob.textContent = data.about
        profileAvatar.src = data.avatar
        userId = data._id

        const cardList = new Section({
            items: initialCards,
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
                    addedNewCard.close()
                    popupButtonCreate.textContent = "Создать"
                });
        })
        addedNewCard.setEventListeners()
        profileAddButton.addEventListener("click", () => addedNewCard.open());

    })

.catch((err) => {
    console.log(err);
});

//PATCH//редактирование информации о пользователе
const popupWithFormEdit = new PopupWithForm(popupEditElement, (item) => {
        popupButtonSave.textContent = "Сохранение..."
        api.editProfile(item)
            .then(() => {
                userInfo.setUserInfo(item)
            })
            .finally(() => {
                popupButtonSave.textContent = "Сохранить"
                popupWithFormEdit.close()
            });
    })
    //добавление лайка
function handlerAddLike(cardId, counter) {
    api.putLike(cardId)

    .then(data => {
            counter.textContent = data.likes.length;
        })
        .catch((err) => {
            console.log(err);
        })
}
//удаление лайка
function handlerRemoveLike(cardId, counter) {
    api.deleteLike(cardId)
        .then(data => {
            counter.textContent = data.likes.length;
        })
        .catch((err) => {
            console.log(err);
        })
}

//слушатели
popupAvatarUserInfo.setEventListeners();
popupWithFormEdit.setEventListeners();
popupImage.setEventListeners();
popupConfirms.setEventListeners()

profileAvatar.addEventListener("click", () => popupAvatarUserInfo.open());