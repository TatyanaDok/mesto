import { popupCloseButton } from "../utils/constants.js";
export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    };

    open() {
        this._popupSelector.classList.add("popup_is-opened");
        this.setEventListeners()
    };

    close() {
        this._popupSelector.classList.remove("popup_is-opened");
        this._removeEventListeners();
    };

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close()
        };

    };

    _handleOverlay(evt) {
        if (evt.target.classList.contains("popup_is-opened")) {
            this.close()
        };
    };

    setEventListeners() {
        document.addEventListener("keydown", (evt) => {
            this._handleEscClose(evt)
        });
        document.addEventListener("click", (evt) => {
            this._handleOverlay(evt)
        });
        popupCloseButton.forEach(btn => {
            btn.addEventListener("click", () => {
                this.close()
            })
        })

    }
    _removeEventListeners() {
        document.removeEventListener("keydown", (evt) => {
            this._handleEscClose(evt)
        });
        document.removeEventListener("click", (evt) => {
            this._handleOverlay(evt)
        });
    }
}