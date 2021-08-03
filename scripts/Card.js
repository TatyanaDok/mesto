export class Card {
    constructor(data, cardSelector, handleCardClick) {

        this._link = data.link;
        this._name = data.name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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
        this._element.querySelector(".element__title").alt = this._name;
        this._element.querySelector(".element__title").textContent = this._name;

        return this._element;

    };
    _deleteButton() {
        this._element.querySelector(".element");
        this._element.remove();
    };
    _likeButton() {
        this._element.querySelector(".element__like-button").classList.toggle("element__like-button_active");
    }
    _setEventListeners() {
        this._element.querySelector(".element__like-button").addEventListener("click", () => {
            this._likeButton();
        });
        this._element.querySelector(".element__delete-button").addEventListener("click", () => {
            this._deleteButton();
        });

        this._element.querySelector(".element__image").addEventListener("click", () => {
            this._handleCardClick(this._link, this._name);
        })

    }





}