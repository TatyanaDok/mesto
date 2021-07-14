//Передаем функции валидации ключи
const enableValidation = ({ formSelector, ...rest }) => {
    const formElement = document.querySelectorAll(formSelector);
    const formList = Array.from(formElement);

    formList.forEach((formElement) => {
        setEventListeners(formElement, rest);

    });
};
//Вешаем слушатели,отслеживаем изменения в инпутах
const setEventListeners = (formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, errorClass }) => {
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    toggleButtonState(inputList, buttonElement, inactiveButtonClass);



    inputList.forEach(inputElement => {
        inputElement.addEventListener("input", (event) => {
            checkInputValidity(formElement, inputElement, errorClass);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });

};
//Подключаем неактивную кнопку в случае ошибки
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    const hasNotValidInput = inputList.some((inputElement) => !inputElement.validity.valid);

    if (hasNotValidInput) {

        buttonElement.setAttribute("disabled", true);
        buttonElement.classList.add(inactiveButtonClass);
    } else {
        buttonElement.removeAttribute("disabled");
        buttonElement.classList.remove(inactiveButtonClass);
    };
};
//Показываем ошибку
const showInputError = (formElement, inputElement, errorMessage, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);

};
//Скрываем ошибку
const hideInputError = (formElement, inputElement, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = "";
    errorElement.classList.remove(errorClass);

};
//Проверяем инпуты на ошибки
const checkInputValidity = (formElement, inputElement, errorClass) => {

    const isInputNotValid = !inputElement.validity.valid;


    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;

        showInputError(formElement, inputElement, errorMessage, errorClass);
    } else {
        hideInputError(formElement, inputElement, errorClass);
    }
};



enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__item",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_inactive",
    errorClass: "popup__input-error_is_active"
});