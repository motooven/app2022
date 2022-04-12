const ADD_POST = "ADD_POST"
const UPDATE_POST = "UPDATE_POST"
export const addPostAC = () => ({type: ADD_POST})
export const updatePostAC = (text) => ({type: UPDATE_POST, text})

const store = {
    _state: {
        profilePage: [
            {id:1, message: "Eee"},
            {id:2, message: "Eeeee"},
            {id:3, message: "Eeeeeeee"},
        ],
        textProfile: "text Profile",
        dialogPage: [
            {id:1, name: "Oleg", message: "Eee"},
            {id:2, name: "Vita", message: "Eeeee"},
            {id:3, name: "Diams", message: "Eeeeeeeee"},
        ],
        textDialog: "text Dialogs"
    },
    getState() {
        return this._state
    },
    rerenderEntire() {
        console.log("renderMain")
    },
    subscriber (observer) {
        this.rerenderEntire = observer
    },

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.textProfile
            }
            this._state.profilePage.push(newPost)
            this._state.textProfile = ''
            this.rerenderEntire(this._state)
        } else if (action.type === UPDATE_POST) {
            this._state.textProfile = action.text
            this.rerenderEntire(this._state)
        }
    }
}

window.state = store
export default store
//40 yrok

