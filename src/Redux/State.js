/*import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

const store = {
    _state: {
        profile: {
            profilePage: [
                {id:1, message: "Eee"},
                {id:2, message: "Eeeee"},
                {id:3, message: "Eeeeeeee"},
            ],
            textProfile: "text ProfileAXIOS",
        },

        dialog: {
            dialogPage: [
                {id:1, name: "Oleg", message: "Eee"},
                {id:2, name: "Vita", message: "Eeeee"},
                {id:3, name: "Diams", message: "Eeeeeeeee"},
            ],
            textDialog: "text Dialogs"
        },

    },
    getState() {
        return this._state
    },
    rerenderEntire() {
        console.log("renderMain")
    },
    subscribe (observer) {
        this.rerenderEntire = observer
    },

    dispatch (action) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.dialog = dialogReducer(this._state.dialog, action)

        this.rerenderEntire(this._state)
    }
}

window.state = store
export default store*/

