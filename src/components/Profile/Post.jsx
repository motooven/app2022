import React from 'react';


const Post = (props) => {
    return (
        <div>
            {props.state.map(p => <div key={p.id}>{p.message}</div>)}
        </div>
    )
}

export default Post;