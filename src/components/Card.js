export default class Card {
    constructor(data, cardSelector, userId, handleCardClick, handlerAddLike, handlerRemoveLike, openPopupConfirm) {
        this._link = data.link;
        this._name = data.name;
        this._ownerId = data.owner._id;
        this._cardId = data._id;
        this._likes = data.likes;
        this._cardSelector = cardSelector;
        this._userId = userId;
        this._handleCardClick = handleCardClick;
        this._handlerAddLike = handlerAddLike;
        this._handlerRemoveLike = handlerRemoveLike;
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

    _toggleCardLike() {
        const like = this._element.querySelector(".element__like-button");
        const counter = this._element.querySelector(".element__like-counter");

        like.classList.toggle("element__like-button_active");

        if (like.classList.contains("element__like-button_active")) {
            this._handlerAddLike(this._cardId, counter);
        } else {
            this._handlerRemoveLike(this._cardId, counter);
        }
    }
    generatePlaceCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".element__image").src = this._link;
        this._element.querySelector(".element__image").alt = this._name;
        this._element.querySelector(".element__title").textContent = this._name;
        this._element.querySelector(".element__like-counter").textContent = this._likes.length;
        const likeButton = this._element.querySelector(".element__like-button")
        const deleteButton = this._element.querySelector(".element__delete-button");

        if (this._ownerId != this._userId) {
            deleteButton.setAttribute("style", "display:none");

        }
        if (this._likes.find(item => item._id === this._userId)) {
            likeButton.classList.add("element__like-button_active");
        }
        return this._element;

    };

    _setEventListeners() {

        this._element.querySelector(".element__like-button").addEventListener('click', () => {
            this._toggleCardLike();
        })
        this._element.querySelector(".element__delete-button").addEventListener("click", () => {
            this._openPopupConfirm(this._element, this._cardId);
        });
        this._element.querySelector(".element__image").addEventListener("click", () => {
            this._handleCardClick(this._link, this._name);
        });
    }
}