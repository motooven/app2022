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
            return {
                ...state,
                profilePage: [...state.profilePage, newPost],
                textProfile: ''
            }

        case UPDATE_POST:
            return {...state, textProfile: action.text}

        default:
            return state
    }


}


export default profileReducer