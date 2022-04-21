import {followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../Redux/userReducer";
import {connect} from "react-redux";
import Users from "./Users";

const mstp = (state) => {
    return {
        users: state.usersPage.users,
        numberPage: state.usersPage.numberPage,
        userPage: state.usersPage.userPage,
        pageReal: state.usersPage.pageReal,
    }
}

const mdtp = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber))}
    }
}

export const UserContainer = connect(mstp, mdtp)(Users)