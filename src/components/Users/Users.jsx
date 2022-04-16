import React from 'react';


const Users = (props) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {id:1, name:"Oleg", followed: false},
            {id:2, name:"Ivan", followed: true},
            {id:3, name:"Dima", followed: false},
        ])
    }




    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <div>{u.id}</div>
                    <div>{u.name}</div>
                    <div>{
                            u.followed
                                ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                                : <button onClick={ () => {props.follow(u.id)} }>Follow</button>}
                    </div>
                    <br/>
                </div>)
            }
        </div>
    );
};

export default Users;