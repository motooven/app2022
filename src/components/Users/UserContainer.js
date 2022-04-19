import {followAC, setUsersAC, unfollowAC} from "../../Redux/userReducer";
import {connect} from "react-redux";
import Users from "./Users";

const mstp = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mdtp = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
    }
}

export const UserContainer = connect(mstp, mdtp)(Users)