import Popup from "../components/Popup.js";
export default class PopupWithSubmit extends Popup {
    constructor(popup) {
        super(popup)
        this._formElement = this._popup.querySelector(".popup__form");
    }
    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        })
    }
    setSubmitCallback(handleSubmit) {
        this._handleSubmit = handleSubmit;
    }
}