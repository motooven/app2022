const ADD_POST_DIALOG = "ADD_POST_DIALOG"
const UPDATE_POST_DIALOG = "UPDATE_POST_DIALOG"
export const addPostDialogAC = () => ({type: ADD_POST_DIALOG})
export const updatePostDialogAC = (text) => ({type: UPDATE_POST_DIALOG, text})


const initialState = {
    dialogPage: [
        {id:1, name: "Oleg", message: "Eee"},
        {id:2, name: "Vita", message: "Eeeee"},
        {id:3, name: "Diams", message: "Eeeeeeeee"},
    ],
    textDialog: "text Dialogs"
}


const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST_DIALOG:
            let newPost = {
                id: 4,
                message: state.textDialog
            }
            let copyStateAdd = {...state}
            copyStateAdd.dialogPage.push(newPost)
            copyStateAdd.textDialog = ''
            return copyStateAdd

        case UPDATE_POST_DIALOG:
            let copyStateUp = {...state}
            copyStateUp.textDialog = action.text
            return copyStateUp

        default:
            return state
    }
}


export default dialogReducer