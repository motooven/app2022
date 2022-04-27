import React from 'react'
import {connect} from "react-redux";
import ProfileAXIOS from "./ProfileAXIOS";
import {addPostAC, updatePostAC} from "../../Redux/profileReducer";
import {setProfileUserAC} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";




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

const WithUrlComponent = withRouter(ProfileAXIOS)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlComponent)