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
            let copyStateAd = {...state}
            copyStateAd.profilePage.push(newPost)
            copyStateAd.textProfile = ''
            return copyStateAd

        case UPDATE_POST:
            let copyStateUp = {...state}
            state.textProfile = action.text
            return state

        default:
            return state
    }


}


export default profileReducer