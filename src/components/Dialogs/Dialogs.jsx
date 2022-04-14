import React from 'react';
import {NavLink} from "react-router-dom";
import {addPostDialogAC, updatePostDialogAC} from "../../Redux/dialogReducer";


const Dialogs = (props) => {
    let addPost = (e) => {
        let text = e.currentTarget.value
        props.dispatch(addPostDialogAC(text))
    }
    let updatePost = (e) => {
        let text = e.currentTarget.value
        props.dispatch(updatePostDialogAC(text))
    }

    return (
        <div className="dialogs">
            <div>
                {props.state.dialog.dialogPage.map(d => <div key={d.id}>
                    <NavLink to={`dialogs/${d.id}`}>{d.name}</NavLink>
                </div>)}
            </div>
            <div>
                {props.state.dialog.dialogPage.map(d => <div key={d.id}>
                    {d.message}
                </div>)}
            </div>
            <div>
                <textarea value={props.state.dialog.textDialog} onChange={updatePost}/><br/>
                <button onClick={addPost}>add Post</button>
            </div>
        </div>
    )
}


export default Dialogs;