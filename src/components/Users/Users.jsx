import React from 'react';
import * as axios from "axios";
import AvatarUser from "../../Logotip/user_03.png"

class Users extends React.Component {

        componentDidMount() {
            alert("Создаю новый обект Users с помощью componentDidMount")
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }

    render() {
         return (
             <div className="buttonSetUsers">
                 {
                     this.props.users.map(u => <div key={u.id}>
                         <div>{u.id}</div>
                         <img src={u.photos.small ? u.photos.small : AvatarUser} className="ImgAvaUser"/>
                         <div>{u.name}</div>
                         {
                             u.followed ? <button onClick={() => {
                                     this.props.unfollow(u.id)
                                 }}>Unfollow</button>
                                 : <button onClick={() => {
                                     this.props.follow(u.id)
                                 }}>Follow</button>
                         }
                         <br/>
                     </div>)
                 }
             </div>
         )
    }
};

export default Users

