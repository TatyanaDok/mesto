//Делаем выборку DOM элементов.
const popupEditElement = document.querySelector(".popup_edit-element");
const popupAddElement = document.querySelector(".popup_add-element");
const profileAddButton = document.querySelector(".profile__add-button");
const formElementAdd = document.querySelector(".popup__form");
const formElementAddPopup = document.querySelector(".popup__form-add");
const closeAddFormButton = document.querySelector(".popup_close-add");
const formElementEditPopup = document.querySelector(".popup__form-edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup__item_form_name");
const jobInput = document.querySelector(".popup__item_form_job");
const closeEditFormButton = document.querySelector(".popup__close-button");
const elementImageTeplate = document.querySelector(".element__image");
const closeImageFormButton = document.querySelector(".popup_close-image");
const popupTextImage = document.querySelector(".popup__text");
const popupElementImage = document.querySelector(".popup__image");
const popupCards = document.querySelector(".popup_cards");
const elementTeplate = document.querySelector(".element-template");
const elementsContainer = document.querySelector(".elements");
const popupFormName = document.querySelector(".popup__item_form_names");
const popupFormUrl = document.querySelector(".popup__item_form_url");

//Открытие попапа.Кнопка edit-form.

function openPopup(popupEditElement) {
    popupEditElement.classList.add("popup_is-opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

};

function closePopup(popupEditElement) {
    popupEditElement.classList.remove("popup_is-opened");

};

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEditElement);
}

profileEditButton.addEventListener("click", () => openPopup(popupEditElement));
closeEditFormButton.addEventListener("click", () => closePopup(popupEditElement));
formElementEditPopup.addEventListener("submit", handleProfileFormSubmit);

//Открытие попапа. Кнопка add-form.

function openPopup(popupAddElement) {
    popupAddElement.classList.add("popup_is-opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

};

function closePopup(popupAddElement) {
    popupAddElement.classList.remove("popup_is-opened");

};



closeAddFormButton.addEventListener("click", () => closePopup(popupAddElement));
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
        likeButton.classList.toggle("button_is-active");
    });



    //Открытие попапа просмотра изображений. Кнопка imageElement.
    function openPopup(popupCards) {
        popupCards.classList.add("popup_is-opened");
        popupElementImage.src = imageElement.src;
        popupElementImage.alt = newElement.textContent;
        popupTextImage.textContent = newElement.textContent;
    };

    function closePopup(popupCards) {
        popupCards.classList.remove("popup_is-opened");
    };
    closeImageFormButton.addEventListener("click", () => closePopup(popupCards));
    imageElement.addEventListener("click", () => openPopup(popupCards));


    return newElement;

};
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