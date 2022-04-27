import React from 'react';
import MyPost from "./MyPost";
import InfoProfile from "./InfoProfile";
import axios from "axios";



class ProfileAXIOS extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setDataUserId(response.data)
        })
    }

    render() {
        return <div className='profile'>
            <InfoProfile
                users={this.props.users}
                state={this.props.profilePage}
                addPost={this.props.addPost}
                updatePost={this.props.updatePost}
            />
            <MyPost state={this.props.profilePage}/>
        </div>
    }
}

export default ProfileAXIOS;