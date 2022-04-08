import React from 'react';
import MyPost from "./MyPost";

const Profile = (props) => {
    return (
        <div className='profile'>
            <div>Avatarka</div>
            <MyPost state={props.state}/>
        </div>
    );
};

export default Profile;