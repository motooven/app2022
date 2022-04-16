import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/userReducer";



const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
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