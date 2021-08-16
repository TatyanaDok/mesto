import "../src/index.css"
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, profileName, profileJob, popupEditElement, popupAddElement, profileAddButton, formElementEditPopup, profileEditButton, popupCards, popupFormName, popupFormUrl, formValidatorEdit, formValidatorAdd, } from "../utils/constants.js";
//вызов валидации форм
formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();
//клас попап
const popupEditElements = new Popup(popupEditElement);
const popupAddElements = new Popup(popupAddElement);
//класс userInfo
const userInfo = new UserInfo(profileName, profileJob);
//передаем данные карточки
const popupWithFormEdit = new PopupWithForm(popupEditElement, (item) => {
    profileName.textContent = item.name
    profileJob.textContent = item.job
})
popupWithFormEdit.setEventListeners()

//добавление новых данных на страницу
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    userInfo.setUserInfo()
    popupEditElements.close();
}

//Открытие попапа Edit.
profileEditButton.addEventListener("click", function(e) {
    popupEditElements.open();
    const userInfo = new UserInfo(profileName, profileJob)
    userInfo.getUserInfo()

});

//создаем карточку
function createCard(data) {
    const card = new Card(data, ".element-template", handleCardClick);

    return card;
}
//создаем новую карточку
const addedNewCard = new PopupWithForm(popupAddElement, (item) => {
    item.name = popupFormName.value;
    item.link = popupFormUrl.value;
    const addedCard = createCard(item, ".element-template");
    const newAddedCard = addedCard.generatePlaceCard()
    cardList.setItem(newAddedCard);
    formValidatorAdd.disableButton();

})
addedNewCard.setEventListeners()
    //рендерим карточки
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = createCard(item, ".element-template");
        const cardElement = card.generatePlaceCard();
        cardList.addItem(cardElement);
    }
}, ".elements")

cardList.renderItems();
//открытие попапа с карточками
function handleCardClick(link, name) {
    const popupImage = new PopupWithImage(popupCards, link, name);
    popupImage.open();
};
//Слушатели для кнопок.

formElementEditPopup.addEventListener("submit", handleProfileFormSubmit);
profileAddButton.addEventListener("click", () => popupAddElements.open());