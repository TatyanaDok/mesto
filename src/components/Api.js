export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;

    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
                headers: this._headers,
            })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((data) => {
                return data
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            });
    }

    updateUserInfo() {
        return fetch(`${this._url}/users/me`, {
                headers: this._headers,
            })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((data) => {
                return data
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            });
    }
    editProfile({ name, job }) {
        return fetch(`${this._url}/users/me`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: name,
                    about: job
                })

            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })


        .catch((err) => {
            console.log(err);
        });

    }
    addNewCard(item) {
        return fetch(`${this._url}/cards`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: item.name,
                    link: item.link
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    putLike(cardId) {

        return fetch(`${this._url}/cards/likes/${cardId}`, {
                method: "PUT",
                headers: this._headers,

            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })


        .catch((err) => {
            console.log(err);
        });
    }
    deleteLike(cardId) {

        return fetch(`${this._url}/cards/likes/${cardId}`, {
                method: "DELETE",
                headers: this._headers,

            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })

        .catch((err) => {
            console.log(err);
        });
    }
    deleteCardFromServer(cardId) {

        return fetch(`${this._url}/cards/${cardId}`, {
                method: 'DELETE',
                headers: this._headers,

            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })

        .catch((err) => {
            console.log(err);
        });
    }
    editAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,

                body: JSON.stringify({
                    avatar: data.link
                })

            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })

        .catch((err) => {
            console.log(err);
        });

    }
}