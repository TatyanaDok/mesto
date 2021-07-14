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
const elementImageTeplate = document.querySelector(".element__image");
const popupCards = document.querySelector(".popup_cards");
const elementTeplate = document.querySelector(".element-template");
const elementsContainer = document.querySelector(".elements");
const popupFormName = document.querySelector(".popup__item_form_names");
const popupFormUrl = document.querySelector(".popup__item_form_url");




//Функция открытия попапа.
function openPopup(popup) {
    popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", handleEsc);

};

function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", handleEsc);

};

//Закрытие попапа по клику на оверлей
document.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_is-opened")) {
        const activePopup = document.querySelector(".popup_is-opened");
        closePopup(activePopup);
    };
});

//Закрытие попапа по нажатию на Escape
const handleEsc = function(evt) {
    if (evt.keyCode === 27) {
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


//Слушатели для кнопок.

closeEditFormButton.addEventListener("click", () => closePopup(popupEditElement));
formElementEditPopup.addEventListener("submit", handleProfileFormSubmit);
closeAddFormButton.addEventListener("click", () => closePopup(popupAddElement));
profileAddButton.addEventListener("click", () => openPopup(popupAddElement));
closeImageFormButton.addEventListener("click", () => closePopup(popupCards));
profileAddButton.addEventListener("click", () => openPopup(popupAddElement));



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
        likeButton.classList.toggle("element__like-button_active");
    });

    //Открытие попапа с фото.
    imageElement.addEventListener("click", function(evt) {
        openPopup(popupCards);
        popupElementImage.src = evt.target.src;
        popupElementImage.alt = name;
        popupTextImage.textContent = name;
    });
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
    const popupButton = document.querySelector(".popup__button-create");

    popupButton.setAttribute("disabled", true);
    popupButton.classList.add("popup__button_inactive");

    evt.target.reset();

    closePopup(popupAddElement);
};
formElementAddPopup.addEventListener("submit", addNewElement);