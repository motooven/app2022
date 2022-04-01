import React from 'react';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className="dialogs">
            <div>
                <div><NavLink to="/dialogs/1">Oleg</NavLink></div>
                <div><NavLink to="/dialogs/2">Jeka</NavLink></div>
                <div><NavLink to="/dialogs/3">Ivan</NavLink></div>

            </div>
            <div>
                <div>Eee</div>
                <div>Eeeeee</div>
                <div>Eeeeeeeeee</div>
            </div>
        </div>
    );
};

export default Dialogs;