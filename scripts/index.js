//Делаем выборку DOM элементов.
const popupEditElement = document.querySelector(".popup_edit-element");
const popupAddElement = document.querySelector(".popup_add-element");
const profileAddButton = document.querySelector(".profile__add-button");
const formElementAdd = document.querySelector(".popup__form");
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
const popupTextImage = document.querySelector(".popup__text");
const popupElementImage = document.querySelector(".popup__image");
const elementImageTeplate = document.querySelector(".element__image");
const popupCards = document.querySelector(".popup_cards");
const elementTeplate = document.querySelector(".element-template");
const elementsContainer = document.querySelector(".elements");
const popupFormName = document.querySelector(".popup__item_form_names");
const popupFormUrl = document.querySelector(".popup__item_form_url");

//Функция открытия попапа.
function openPopup(popup) {
    popup.classList.add("popup_is-opened");
};

function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
};
//Обработчик данных.
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEditElement);
}



//Передача данных в попапы.
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;


//Слушатели для кнопок.
profileEditButton.addEventListener("click", () => openPopup(popupEditElement));
closeEditFormButton.addEventListener("click", () => closePopup(popupEditElement));
formElementEditPopup.addEventListener("submit", handleProfileFormSubmit);
closeAddFormButton.addEventListener("click", () => closePopup(popupAddElement));
profileAddButton.addEventListener("click", () => openPopup(popupAddElement));
closeImageFormButton.addEventListener("click", () => closePopup(popupCards));




//Добавляем массив с новыми изображениями и названием

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



//Отрисовываем карточки и добавляем на страницу

function createElement(name, link) {
    const newElement = elementTeplate.content.querySelector(".element").cloneNode(true);
    const deleteButton = newElement.querySelector(".element__delete-button");
    const likeButton = newElement.querySelector(".element__like-button");

    newElement.querySelector(".element__title").textContent = name;

    const imageElement = newElement.querySelector(".element__image");

    imageElement.src = link;
    imageElement.alt = name;


    //Удаление карточек.
    deleteButton.addEventListener("click", function(e) {
        e.target.closest(".element").remove();
    });

    //Лайки.
    likeButton.addEventListener("click", function(e) {
        likeButton.classList.toggle("element__button-like_active");
    });
    //Открытие попапа с картинками. Добавление данных.

    function openPopup(popupCards) {
        popupCards.classList.add("popup_is-opened");
        popupElementImage.src = imageElement.src;
        popupElementImage.alt = newElement.textContent;
        popupTextImage.textContent = newElement.textContent;
    };

    imageElement.addEventListener("click", () => openPopup(popupCards));


    return newElement;

};
//Вывод новых карточек.
initialCards.forEach(function(el) {
    elementsContainer.append(createElement(el.name, el.link));

});



//Сохранение новой карточки
const addNewElement = (evt) => {
    evt.preventDefault();
    const newName = popupFormName.value;
    const newLink = popupFormUrl.value;
    elementsContainer.prepend(createElement(newName, newLink));
    closePopup(popupAddElement);

    popupFormName.value = "";
    popupFormUrl.value = "";

};
formElementAddPopup.addEventListener("submit", addNewElement);
//Добавление данных в попап.