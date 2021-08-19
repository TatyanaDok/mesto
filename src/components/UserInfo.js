export default class UserInfo {
    constructor(profileName, profileJob) {
        this._profileName = profileName
        this._profileJob = profileJob
    }
    getUserInfo() {
        this._userData = {};
        this._userData.name = this._profileName.textContent
        this._userData.job = this._profileJob.textContent
        return this._userData;
    }
    setUserInfo(item) {
        this._profileName.textContent = item.name;
        this._profileJob.textContent = item.job;
    }

}