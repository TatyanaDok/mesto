import { nameInput, jobInput, profileName, profileJob } from "../utils/constants.js"
export default class UserInfo {
    constructor(profileName, profileJob) {
        this._profileName = profileName;
        this._profileJob = profileJob;
    }
    getUserInfo() {
        nameInput.value = this._profileName.textContent;
        jobInput.value = this._profileJob.textContent;
    }
    setUserInfo() {
        profileName.textContent = nameInput.value;
        profileJob.textContent = jobInput.value;
    }

}