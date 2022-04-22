const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_PAGINATION_USERS = "SET_PAGINATION_USERS"

export const followAC = (userId) => ({type: FOLLOW, userId}) //подписаться
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId}) //одписаться
export const setUsersAC = (users) => ({type: SET_USERS, users})  //получить всех пользователей
export const setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber}) //меняем текущею страничку на клик
export const setPaginationUsersAC = (pagination) => ({type:SET_PAGINATION_USERS, pagination}) //уст общее колич польз с серв


const initialState = {
    users: [ ],
    numberPage: 100,
    userPage: 5,
    pageReal: 3
}

const usersReducer = (state = initialState, action) => {
    switch  (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return  {
                ...state, pageReal: action.pageNumber
            }
        case SET_PAGINATION_USERS:
            return {
                ...state, numberPage: action.pagination
            }
        default:
            return state
    }
}

export default usersReducer
