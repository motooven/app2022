import React from 'react';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
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
        </div>
    )
}


export default Dialogs;