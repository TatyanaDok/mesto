import Popup from "./Popup.js"
import { popupElementImage, popupTextImage } from "../utils/constants.js"

export default class PopupWithImage extends Popup {
    constructor(popupSelector, link, name) {
        super(popupSelector);
        this._link = link;
        this._name = name
    }

    open() {
        super.open()
        popupElementImage.src = this._link;
        popupElementImage.alt = this._name;
        popupTextImage.textContent = this._name;

    }
}