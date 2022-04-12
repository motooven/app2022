import React from 'react';
import MyPost from "./MyPost";
import InfoProfile from "./InfoProfile";

const Profile = (props) => {
    return (
        <div className='profile'>
            <InfoProfile
                state={props.state}
                dispatch={props.dispatch}
            />
            <MyPost state={props.state}/>
        </div>
    );
};

export default Profile;