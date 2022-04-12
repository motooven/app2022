import React from 'react';
import Post from "./Post";

const MyPost = (props) => {

    return (
        <div>
            <Post state={props.state}/>
        </div>
    );
};

export default MyPost;