import FormValidator from "../components/FormValidator.js";
export const popupCloseButton = document.querySelectorAll(".popup__close-button");
export const popupElementImage = document.querySelector(".popup__image");
export const popupTextImage = document.querySelector(".popup__text");
export const profileName = document.querySelector(".profile__title");
export const profileJob = document.querySelector(".profile__subtitle");
export const nameInput = document.querySelector(".popup__item_form_name");
export const jobInput = document.querySelector(".popup__item_form_job");
export const popupEditElement = document.querySelector(".popup_edit-element");
export const popupAddElement = document.querySelector(".popup_add-element");
export const profileAddButton = document.querySelector(".profile__add-button");
export const formElementAddPopup = document.querySelector(".popup__form-add");
export const formElementEditPopup = document.querySelector(".popup__form-edit");
export const profileEditButton = document.querySelector(".profile__edit-button");
export const popupCards = document.querySelector(".popup_cards");
export const elementsContainer = document.querySelector(".elements");
export const popupFormName = document.querySelector(".popup__item_form_names");
export const popupFormUrl = document.querySelector(".popup__item_form_url");

export const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
export const validationConfig = {
    inputSelector: ".popup__item",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_inactive",
    errorClass: "popup__input-error_is_active"
}
export const formValidatorEdit = new FormValidator(validationConfig, formElementEditPopup);
export const formValidatorAdd = new FormValidator(validationConfig, formElementAddPopup);