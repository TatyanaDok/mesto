import "../pages/index.css"
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, profileName, profileJob, popupEditElement, popupAddElement, profileAddButton, profileEditButton, popupCards, popupFormName, popupFormUrl, formValidatorEdit, formValidatorAdd, nameInput, jobInput, } from "../utils/constants.js";
//вызов валидации форм
formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();
//клас попап
const popupEditElements = new PopupWithForm(popupEditElement);
const popupAddElements = new PopupWithForm(popupAddElement);
const popupImage = new PopupWithImage(popupCards);
const userInfo = new UserInfo(profileName, profileJob);
const popupWithFormEdit = new PopupWithForm(popupEditElement, (inputValues) => {
    userInfo.setUserInfo(inputValues)
})
popupWithFormEdit.setEventListeners()
popupImage.setEventListeners()

//Открытие попапа Edit.
profileEditButton.addEventListener("click", function(e) {
    popupEditElements.open();
    const profileInfo = userInfo.getUserInfo()
    nameInput.value = profileInfo.name
    jobInput.value = profileInfo.job
});

//создаем карточку
function createCard(data) {
    const card = new Card(data, ".element-template", handleCardClick);
    const cardElement = card.generatePlaceCard();
    return cardElement;
}
//создаем новую карточку
const addedNewCard = new PopupWithForm(popupAddElement, (inputValues) => {
    inputValues.name = popupFormName.value;
    inputValues.link = popupFormUrl.value;
    const newAddedCard = createCard(inputValues, ".element-template");
    cardList.setItem(newAddedCard);
    formValidatorAdd.disableButton();

})

addedNewCard.setEventListeners()
    //рендерим карточки
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const addedCard = createCard(item, ".element-template");
        cardList.addItem(addedCard);
    }
}, ".elements")

cardList.renderItems();
//открытие попапа с карточками
function handleCardClick(name, link) {
    popupImage.open(name, link);

};
popupImage.close()

profileAddButton.addEventListener("click", () => popupAddElements.open());