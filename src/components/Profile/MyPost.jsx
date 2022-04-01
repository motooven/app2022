import React from 'react';
import Post from "./Post";

const MyPost = () => {
    return (
        <div>
            <div><textarea></textarea></div>
            <div><button>add post</button></div><br/>
            <Post messages="Eeee"/>
            <Post messages="Eeeeeeee"/>
            <Post messages="Eeeeeeeeeeee"/>
        </div>
    );
};

export default MyPost;