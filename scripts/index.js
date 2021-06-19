// Делаем выборку DOM элементов
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const profileButtonElement = document.querySelector(".profile__edit-button");
const popupElement = document.querySelector(".popup");
const popupClouseButtonElement = document.querySelector(".popup__close");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup_item-name");
const jobInput = document.querySelector(".popup_item-job");

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