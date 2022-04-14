const ADD_POST = "ADD_POST"
const UPDATE_POST = "UPDATE_POST"
export const addPostAC = () => ({type: ADD_POST})
export const updatePostAC = (text) => ({type: UPDATE_POST, text})


const initialState = {
    profilePage: [
        {id:1, message: "Eee"},
        {id:2, message: "Eeeee"},
        {id:3, message: "Eeeeeeee"},
    ],
    textProfile: "text Profile",
}


const profileReducer = (state = initialState, action) => {
    switch  (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.textProfile
            }
            state.profilePage.push(newPost)
            state.textProfile = ''
            return state

        case UPDATE_POST:
            state.textProfile = action.text
            return state

        default:
            return state
    }


}


export default profileReducer