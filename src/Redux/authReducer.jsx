const ZALOGIN = "ZALOGIN"
const NEZALOGIN = "NEZALOGIN"

export const zaloginAC = (yesLogin) => ({type: ZALOGIN, yesLogin})
export const nezaloginAC = (noyLogin) => ({type: NEZALOGIN, noyLogin})


const initialState = {
    email: null,
    login: null,
    id: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ZALOGIN:
            return {
                ...state,
                ...action.yesLogin,
                isAuth: true,
            }
        case NEZALOGIN:
            return {
                ...state,
                ...action.yesLogin,

            }
        default:
            return state
    }
}

export default authReducer