import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addPostDialogAC, updatePostDialogAC} from "../../Redux/dialogReducer";

const mapStateToProps = (state) => {

    return {
        dialogPage: state.dialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostDialogAC())
        },
        updatePost: (text) => {
            dispatch(updatePostDialogAC(text))
        }
    }
}

export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)