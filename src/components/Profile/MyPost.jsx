import React from 'react';
import Post from "./Post";

const MyPost = (props) => {
    return (
        <div>
            <div><textarea></textarea></div>
            <div><button>add post</button></div><br/>
            <Post state={props.state}/>
        </div>
    );
};

export default MyPost;