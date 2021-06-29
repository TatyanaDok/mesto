//Делаем выборку DOM элементов попапа.
const popupElement = document.getElementById("popup");
const popupClouseButtonElement = document.getElementById("close-edit");
const formElement = document.getElementById("edit-form");
const profileButtonElement = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup__item_form_name");
const jobInput = document.querySelector(".popup__item_form_job");

//Открытие попапа.Кнопка edit-form.

const openPopup = function() {
    popupElement.classList.add("popup_is-opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

};

const closePopup = function() {
    popupElement.classList.remove("popup_is-opened");

};

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}

profileButtonElement.addEventListener("click", openPopup);
popupClouseButtonElement.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);

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

//Делаем выборку DOM элементов для шаблона


const elementTeplate = document.querySelector(".element-template");
const elementsContainer = document.querySelector(".elements");

//Отрисовываем карточки и добавляем на страницу

function createElement(name, link) {
    const newElement = elementTeplate.content.querySelector(".element").cloneNode(true);

    newElement.querySelector(".element__title").textContent = name;

    const imageElement = newElement.querySelector(".element__image");

    imageElement.src = link;
    imageElement.alt = name;

    //Удаление карточки с фото.

    const deleteButton = document.querySelectorAll(".element__delete-button");

    deleteButton.forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.target.closest(".element").remove();
        });
    });


    //Делаем выборку DOM элементов для попапа
    const popupContainerImg = document.querySelector(".popup__container-image");
    const popupImage = document.getElementById("popup-img");
    const popupClouseImg = document.getElementById("close-img");
    const popupNameImg = document.querySelector(".popup__text");
    const popupImg = document.querySelector(".popup__image");

    //Открытие попапа просмотра изображений. Кнопка imageElement.
    const openPopupImg = function() {
        popupImage.classList.add("popup_is-opened");
        popupImg.src = imageElement.src;
        popupNameImg.textContent = newElement.textContent;
    };

    const closePopupImg = function() {
        popupImage.classList.remove("popup_is-opened");
    };
    popupClouseImg.addEventListener("click", closePopupImg);
    imageElement.addEventListener("click", openPopupImg);


    return newElement;

};
initialCards.forEach(function(el) {
    elementsContainer.append(createElement(el.name, el.link));

});



//Делаем выборку DOM элементов для попапа
const formElementAdd = document.getElementById("add-form");
const profileButton = document.querySelector(".profile__add-button");
const popupClouseButton = document.getElementById("close-add");
const popupPlace = document.getElementById("popup-add");
const nameInputAdd = document.querySelector(".popup__item_form_names");
const nameInputUrl = document.querySelector(".popup__item_form_url");

//Открытие  попапа. Кнопка add-form.

const openPopupAdd = function() {
    popupPlace.classList.add("popup_is-opened");
};
const closePopupAdd = function() {
    popupPlace.classList.remove("popup_is-opened");
};

//Сохранение карточки
const elementTitle = document.querySelector(".element__title");
const elementImg = document.querySelector(".element__image");

function formSubmitHandler(evt) {
    evt.preventDefault();
    elementTitle.textContent = nameInputAdd.value;
    elementImg.src = nameInputUrl.value;

    closePopupAdd();
}
popupClouseButton.addEventListener("click", closePopupAdd);
profileButton.addEventListener("click", openPopupAdd);
formElementAdd.addEventListener("submit", formSubmitHandler);


//Лайки
const elementLike = document.querySelectorAll(".element__like-button");
elementLike.forEach(el => {
    el.addEventListener("click", e => {
        el.classList.toggle("element_is-active");

    });
});