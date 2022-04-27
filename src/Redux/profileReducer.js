const ADD_POST = "ADD_POST"
const UPDATE_POST = "UPDATE_POST"
const SET_PROFILE_USER_ID = "SET_PROFILE_USER_ID"

export const addPostAC = () => ({type: ADD_POST})
export const updatePostAC = (text) => ({type: UPDATE_POST, text})
export const setProfileUserAC = (dataUserId) => ({type: SET_PROFILE_USER_ID, dataUserId}) //сетаем профиль пользователя


const initialState = {
    profilePage: [
        {id:1, message: "Eee"},
        {id:2, message: "Eeeee"},
        {id:3, message: "Eeeeeeee"},
    ],

    textProfile: "text ProfileAXIOS",

    users: [],
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

        case SET_PROFILE_USER_ID:
            return  {
                ...state, users: action.dataUserId
            }
        default:
            return state
    }
}

export default profileReducer