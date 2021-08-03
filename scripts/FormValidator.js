export class FormValidator {
    constructor(validationConfig, formSelector) {
        this._formSelector = formSelector;
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._errorClass = validationConfig.errorClass;
    }

    enableValidation = () => {
        const formElement = document.querySelectorAll(this._formSelector);
        const formList = Array.from(formElement);

        formList.forEach((formElement) => {
            this._setEventListeners(formElement);

        });
    };
    //Вешаем слушатели,отслеживаем изменения в инпутах
    _setEventListeners = (formElement) => {
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
        });

        const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        const buttonElement = formElement.querySelector(this._submitButtonSelector);

        this._toggleButtonState(inputList, buttonElement, this._inactiveButtonClass);



        inputList.forEach(inputElement => {
            inputElement.addEventListener("input", (event) => {
                this._checkInputValidity(formElement, inputElement, this._errorClass);
                this._toggleButtonState(inputList, buttonElement, this._inactiveButtonClass);
            });
        });

    };
    //Подключаем неактивную кнопку в случае ошибки
    _toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
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
    _showInputError = (formElement, inputElement, errorMessage, errorClass) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(errorClass);

    };
    //Скрываем ошибку
    _hideInputError = (formElement, inputElement, errorClass) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = "";
        errorElement.classList.remove(errorClass);

    };
    //Проверяем инпуты на ошибки
    _checkInputValidity = (formElement, inputElement, errorClass) => {

        const isInputNotValid = !inputElement.validity.valid;


        if (isInputNotValid) {
            const errorMessage = inputElement.validationMessage;

            this._showInputError(formElement, inputElement, errorMessage, errorClass);
        } else {
            this._hideInputError(formElement, inputElement, errorClass);
        }
    };
}