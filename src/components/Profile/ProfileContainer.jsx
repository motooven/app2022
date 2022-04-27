import React from 'react'
import {connect} from "react-redux";
import ProfileAXIOS from "./ProfileAXIOS";
import {addPostAC, updatePostAC} from "../../Redux/profileReducer";
import {setProfileUserAC} from "../../Redux/profileReducer";




const mapStateToProps = (state) => {
    return {
        profilePage: state.profile,
        users: state.profile.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => { dispatch(addPostAC()) },
        updatePost: (text) => { dispatch(updatePostAC(text)) },
        setDataUserId: (data) => {dispatch(setProfileUserAC(data))}
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAXIOS)