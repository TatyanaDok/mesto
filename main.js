!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._name=e.name,this._cardSelector=n,this._handleCardClick=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generatePlaceCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".element__image").src=this._link,this._element.querySelector(".element__image").alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this._element}},{key:"_deleteCard",value:function(){this._element.remove()}},{key:"_likeCard",value:function(){this._element.querySelector(".element__like-button").classList.toggle("element__like-button_active")}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like-button").addEventListener("click",(function(){e._likeCard()})),this._element.querySelector(".element__delete-button").addEventListener("click",(function(){e._deleteCard()})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick(e._link,e._name)}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"setItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlay=this._handleOverlay.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("click",this._handleOverlay)}},{key:"close",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("click",this._handleOverlay)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlay",value:function(e){e.target.classList.contains("popup_is-opened")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseButton=this._popup.querySelector(".popup__close-button"),this._popupCloseButton.addEventListener("click",(function(){e.close()}))}}])&&o(t.prototype,n),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"open",value:function(e,t){this._popupImage=this._popup.querySelector(".popup__image"),this._popupText=this._popup.querySelector(".popup__text"),this._popupImage.src=e,this._popupImage.alt=t,this._popupText.textContent=t,c(p(u.prototype),"open",this).call(this)}}])&&a(t.prototype,n),u}(i);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._inputList=n._popup.querySelectorAll(".popup__item"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;h(v(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){h(v(u.prototype),"close",this).call(this),this._popup.querySelector(".popup__form").reset()}}])&&d(t.prototype,n),u}(i);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=t,this._profileJob=n}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userData={},this._userData.name=this._profileName.textContent,this._userData.job=this._profileJob.textContent,this._userData}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileJob.textContent=e.job}}])&&g(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E(this,"_toggleButtonState",(function(){r._inputList.some((function(e){return!e.validity.valid}))?r.disableButton():(r._buttonElement.removeAttribute("disabled"),r._buttonElement.classList.remove(r._inactiveButtonClass))})),E(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));n.textContent=t,n.classList.add(r._errorClass)})),E(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));t.textContent="",t.classList.remove(r._errorClass)})),E(this,"_checkInputValidity",(function(e){if(e.validity.valid)r._hideInputError(e);else{var t=e.validationMessage;r._showInputError(e,t)}})),E(this,"_setEventListeners",(function(){r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))})),r._toggleButtonState()})),E(this,"enableValidation",(function(){r._formElement.addEventListener("submit",(function(e){return e.preventDefault})),r._setEventListeners()})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}}])&&S(t.prototype,n),e}(),C=(document.querySelectorAll(".popup__close-button"),document.querySelector(".popup__image"),document.querySelector(".popup__text"),document.querySelector(".profile__title")),O=document.querySelector(".profile__subtitle"),j=document.querySelector(".popup__item_form_name"),q=document.querySelector(".popup__item_form_job"),L=document.querySelector(".popup_edit-element"),I=document.querySelector(".popup_add-element"),P=document.querySelector(".profile__add-button"),x=document.querySelector(".popup__form-add"),B=document.querySelector(".popup__form-edit"),R=document.querySelector(".profile__edit-button"),T=document.querySelector(".popup_cards"),D=(document.querySelector(".elements"),document.querySelector(".popup__item_form_names"),document.querySelector(".popup__item_form_url"),document.querySelector(".profile__avatar")),V={inputSelector:".popup__item",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",errorClass:"popup__input-error_is_active"};function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards",{headers:{authorization:"3241e824-00fc-4fae-a12a-df6ad380713b"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e)}))}},{key:"updateUserInfo",value:function(){fetch("https://nomoreparties.co/v1/cohort-27/users/me",{headers:{authorization:"3241e824-00fc-4fae-a12a-df6ad380713b"}}).then((function(e){return e.json()})).then((function(e){C.textContent=e.name,O.textContent=e.about,D.src=e.avatar}))}}])&&U(t.prototype,n),e}(),z=new w(V,B),N=new w(V,x);z.enableValidation(),N.enableValidation();var J=new f(T),F=new k(C,O),M=new b(L,(function(e){F.setUserInfo(e)}));function G(e){return new t(e,".element-template",Q).generatePlaceCard()}M.setEventListeners(),J.setEventListeners(),R.addEventListener("click",(function(e){M.open();var t=F.getUserInfo();j.value=t.name,q.value=t.job}));var H=new b(I,(function(e){var t=G(e);K.setItem(t),N.disableButton()}));H.setEventListeners();var K=new r({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=G(e);K.addItem(t)}},".elements");function Q(e,t){J.open(e,t)}K.renderItems(),P.addEventListener("click",(function(){return H.open()}));var W=new A({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"3241e824-00fc-4fae-a12a-df6ad380713b","Content-Type":"application/json"}});W.updateUserInfo(),W.getInitialCards()}();