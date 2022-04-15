import React from 'react';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    let addPost = (e) => {
       let text = e.currentTarget.value
       props.addPost(text)
    }
    let updatePost = (e) => {
        let text = e.currentTarget.value
        props.updatePost(text)
    }

    return (
        <div className="dialogs">
            <div>
                {props.dialogPage.dialogPage.map(d => <div key={d.id}>
                    <NavLink to={`dialogs/${d.id}`}>{d.name}</NavLink>
                </div>)}
            </div>
            <div>
                {props.dialogPage.dialogPage.map(d => <div key={d.id}>
                    {d.message}
                </div>)}
            </div>
            <div>
                <textarea value={props.dialogPage.textDialog} onChange={updatePost}/><br/>
                <button onClick={addPost}>add Post</button>
            </div>
        </div>
    )
}


export default Dialogs;