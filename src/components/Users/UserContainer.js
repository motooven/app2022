import {followAC, setUsersAC, unfollowAC} from "../../Redux/userReducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
    }
}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)