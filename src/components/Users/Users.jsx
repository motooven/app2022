import React from 'react';
import * as axios from "axios";
import AvatarUser from "../../Logotip/user_03.png"

class Users extends React.Component {


        constructor(props) {
            super(props);
        }

        componentDidMount() {
            // alert("Создаю новый обект Users с помощью componentDidMount")
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.numberPage}&count=${this.props.userPage}`).then(response => {
                this.props.setUsers(response.data.items)
            })
        }

    funcZapros(p) {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.userPage}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        const pagination = Math.ceil( this.props.numberPage / this.props.userPage )
        const page = []
        for (let i = 1; i <= pagination; ++i) {
            page.push(i)
        }

         return (
             <div className="buttonSetUsers">
                 {
                     page.map(p => {
                         return <span
                         key={p.id}
                         className={ this.props.pageReal === p && "paginationStiles" }
                         onClick={ () => {this.funcZapros(p)} }>{p}</span>})

                 }
                 {
                     this.props.users.map(u => <div key={u.id}>

                         <img src={u.photos.small ? u.photos.small : AvatarUser} className="ImgAvaUser"/>
                         <div>{u.id}</div>
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

