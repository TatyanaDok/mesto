import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleProfileFormSubmit) {
        super(popupSelector);
        this._handleProfileFormSubmit = handleProfileFormSubmit;
        this._inputList = this._popupSelector.querySelectorAll(".popup__item")

    }
    _getInputValues() {
        this._formValues = {}
        this._inputList.forEach(input => this._formValues[input.name] = input.value)
        return this._formValues
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupSelector.addEventListener("submit", (evt) => {
            evt.preventDefault()
            this._handleProfileFormSubmit(this._getInputValues())
            this.close()
        })
    }
    close() {
        super.close();
        this._popupSelector.querySelector(".popup__form").reset();
    }
}