import React from 'react';
import {NavLink} from "react-router-dom";

const Headers = (props) => {
    return (
        <div className='headers'>
            Headers
            <div className="loginBlock">
                { props.auth.isAuth
                            ? props.auth.login
                            : <NavLink to="/login">Login</NavLink>
                }

            </div>
        </div>
    );
};

export default Headers;


/*
props.auth:
email: "spontaneity@list.ru"
id: 12938
isAuth: false
login: "dew"
userId: null*/
