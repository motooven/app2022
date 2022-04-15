import React from 'react';
import MyPost from "./MyPost";
import InfoProfile from "./InfoProfile";

const Profile = (props) => {

    return (
        <div className='profile'>
            <InfoProfile
                    state={props.profilePage}
                    addPost={props.addPost}
                    updatePost={props.updatePost}
            />
            <MyPost state={props.profilePage}/>
        </div>
    );
};

export default Profile;