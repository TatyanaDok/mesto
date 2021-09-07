export default class Card {
    constructor(data, cardSelector, handleCardClick, handleLikePut, openPopupConfirm) {

        this._link = data.link;
        this._name = data.name;
        this._ownerId = data.owner._id;
        this._cardId = data._id;
        this._likes = data.likes;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikePut = handleLikePut;
        this._openPopupConfirm = openPopupConfirm;
    };

    _getTemplate() {
        const newElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector(".element")
            .cloneNode(true);

        return newElement;
    };

    generatePlaceCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".element__image").src = this._link;
        this._element.querySelector(".element__image").alt = this._name;
        this._element.querySelector(".element__title").textContent = this._name;
        this._element.querySelector(".element__like-counter").textContent = this._likes.length;
        const deleteButton = this._element.querySelector(".element__delete-button");

        if (this._ownerId === "9258ae22048841884a733c1d") {
            deleteButton.setAttribute("style", "opacity:1");

        }
        return this._element;

    };

    _setEventListeners() {
        this._button = this._element.querySelector(".element__like-button")
        this._counter = this._element.querySelector(".element__like-counter")

        this._button.addEventListener('click', () => {
            this._handleLikePut(this._button, this._cardId, this._counter);
        })
        this._element.querySelector(".element__delete-button").addEventListener("click", () => {
            this._openPopupConfirm(this._element, this._cardId);

        });
        this._element.querySelector(".element__image").addEventListener("click", () => {
            this._handleCardClick(this._link, this._name);
        });



    }
}