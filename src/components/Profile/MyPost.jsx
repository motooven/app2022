import React from 'react';
import Post from "./Post";

const MyPost = (props) => {
    return (
        <div>
            <Post state={props.state.profilePage}/>
        </div>
    );
};

export default MyPost;