import React from 'react';
import * as axios from "axios";
import AvatarUser from "../../Logotip/Arkaneee.jpg"

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div>{u.id}</div>
                    <img src={u.photos.small != null ? u.photos.small : AvatarUser } className="ImgAvaUser"/>
                    <div>{u.name}</div>
                    <div>{
                        u.followed
                            ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                            : <button onClick={ () => {props.follow(u.id)} }>Follow</button>
                    }</div><br/>
                </div>)
            }
        </div>
    );
};

export default Users;