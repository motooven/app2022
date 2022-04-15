import React from 'react'
import {connect} from "react-redux";
import Profile from "./Profile";
import {addPostAC, updatePostAC} from "../../Redux/profileReducer";


const mapStateToProps = (state) => {
    return {
        profilePage: state.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => { dispatch(addPostAC()) },
        updatePost: (text) => { dispatch(updatePostAC(text)) }
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)