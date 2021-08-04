import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

//Делаем выборку DOM элементов.
const popupEditElement = document.querySelector(".popup_edit-element");
const popupAddElement = document.querySelector(".popup_add-element");
const profileAddButton = document.querySelector(".profile__add-button");
const formElementAddPopup = document.querySelector(".popup__form-add");
const closeAddFormButton = document.querySelector(".popup__close-add");
const formElementEditPopup = document.querySelector(".popup__form-edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup__item_form_name");
const jobInput = document.querySelector(".popup__item_form_job");
const closeEditFormButton = document.querySelector(".popup__close-edit");
const closeImageFormButton = document.querySelector(".popup__close-image");
const popupElementImage = document.querySelector(".popup__image");
const popupTextImage = document.querySelector(".popup__text");
const popupCards = document.querySelector(".popup_cards");
const elementsContainer = document.querySelector(".elements");
const popupFormName = document.querySelector(".popup__item_form_names");
const popupFormUrl = document.querySelector(".popup__item_form_url");

//объект с селекторами
const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__item",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_inactive",
    errorClass: "popup__input-error_is_active"
}
const formValidatorEdit = new FormValidator(validationConfig, ".popup_edit-element");
const formValidatorAdd = new FormValidator(validationConfig, ".popup_add-element");

formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();

//объект с карточками и названием
const initialCards = [{
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

//Функция открытия попапа.
function openPopup(popup) {
    popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("click", handleOverlay);
};

//Функция закрытия попапа.
function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", handleEsc);
    document.removeEventListener("click", handleOverlay);
};

//Закрытие попапа по клику на оверлей
const handleOverlay = function(evt) {
    if (evt.target.classList.contains("popup_is-opened")) {
        const activePopup = document.querySelector(".popup_is-opened");
        closePopup(activePopup);
    };
};

//Закрытие попапа по нажатию на Escape
const handleEsc = function(evt) {
    if (evt.key === "Escape") {
        const activePopup = document.querySelector(".popup_is-opened");
        closePopup(activePopup);
    };
};

//Обработчик данных.
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEditElement);
}

//Открытие попапа Edit.
profileEditButton.addEventListener("click", function(e) {
    openPopup(popupEditElement);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

//Сохранение новой карточки
const addNewElement = (evt) => {
    evt.preventDefault();
    const name = popupFormName.value;
    const link = popupFormUrl.value;

    const addedCard = createCard({ name: name, link: link });
    elementsContainer.prepend(addedCard);
    const popupButton = document.querySelector(".popup__button-create");

    formValidatorEdit.disabled(popupButton);
    evt.target.reset();
    closePopup(popupAddElement);
};

//создаем класс
function createCard(data) {
    const card = new Card(data, ".element-template", handleCardClick);
    const cardElement = card.generatePlaceCard();

    return cardElement;
}

//инициализация начальных карточек
initialCards.forEach((item) => {
    const addedCard = createCard(item);
    elementsContainer.append(addedCard);
});

//открытие попапа с фото
function handleCardClick(link, name) {
    popupElementImage.src = link;
    popupElementImage.alt = name;
    popupTextImage.textContent = name;
    openPopup(popupCards);
};

//Слушатели для кнопок.
closeEditFormButton.addEventListener("click", () => closePopup(popupEditElement));
formElementEditPopup.addEventListener("submit", handleProfileFormSubmit);
closeAddFormButton.addEventListener("click", () => closePopup(popupAddElement));
profileAddButton.addEventListener("click", () => openPopup(popupAddElement));
closeImageFormButton.addEventListener("click", () => closePopup(popupCards));
profileAddButton.addEventListener("click", () => openPopup(popupAddElement));
formElementAddPopup.addEventListener("submit", addNewElement);