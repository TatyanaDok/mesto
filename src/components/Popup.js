export default class Popup {
    constructor(popup) {
        this._popup = popup;
    };

    open() {
        this._popup.classList.add("popup_is-opened");
        //this.setEventListeners()
        document.addEventListener("keydown", (evt) => {
            this._handleEscClose(evt);
        });
        document.addEventListener("click", (evt) => {
            this._handleOverlay(evt)
        });
    };

    close() {
        this._popup.classList.remove("popup_is-opened");
        document.removeEventListener("keydown", (evt) => {
            this._handleEscClose(evt)
        });
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