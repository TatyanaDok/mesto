export default class Popup {
    constructor(popup) {
        this._popup = popup;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlay = this._handleOverlay.bind(this);
    };

    open() {
        this._popup.classList.add("popup_is-opened");
        document.addEventListener("keydown", this._handleEscClose);
        document.addEventListener("click", this._handleOverlay);
    };

    close() {
        this._popup.classList.remove("popup_is-opened");
        document.removeEventListener("keydown", this._handleEscClose);
        document.removeEventListener("click", this._handleOverlay);
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
        this._popupCloseButton = this._popup.querySelector(".popup__close-button");
        this._popupCloseButton.addEventListener("click", () => {
            this.close();
        })

    }




}