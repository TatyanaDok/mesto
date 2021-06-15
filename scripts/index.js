
// Делаем выборку DOM элементов
const profileElement = document.querySelector('.profile');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const profileButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupClouseButtonElement = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__form-name');
const jobInput = document.querySelector('.popup__form-job');
const buttonSave = document.querySelector('.popup__save-button');
console.log({popupClouseButtonElement, profileButtonElement, profileName, profileJob, formElement, jobInput, nameInput})








const openPopup = function() {

   popupElement.classList.add('popup__is-opened');
   nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;
}

const closePopup = function() {
    popupElement.classList.remove('popup__is-opened');
}

profileButtonElement.addEventListener('click', openPopup);
popupClouseButtonElement.addEventListener('click', closePopup);




function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    
    closePopup();
    
}

formElement.addEventListener('submit', formSubmitHandler);





