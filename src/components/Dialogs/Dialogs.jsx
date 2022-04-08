import React from 'react';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {

    let elementRef = React.createRef()
    let addPost = () => {
        let text = elementRef.current.value
        alert(text)
    }

    return (
        <div className="dialogs">
            <div>
                {props.state.dialogPage.map(d => <div key={d.id}>
                    <NavLink to={`dialogs/${d.id}`}>{d.name}</NavLink>
                </div>)}
            </div>
            <div>
                {props.state.dialogPage.map(d => <div key={d.id}>
                    {d.message}
                </div>)}
            </div>
            <div>
                <textarea ref={elementRef}></textarea><br/>
                <button onClick={addPost}>add Post</button>
            </div>
        </div>
    )
}


export default Dialogs;