import Popup from "./Popup.js"
export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);

    }
    open(link, name) {
        this._popupImage = this._popup.querySelector(".popup__image")
        this._popupText = this._popup.querySelector(".popup__text")
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupText.textContent = name;
        super.open()
    }
}