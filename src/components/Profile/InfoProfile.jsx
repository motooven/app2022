import React from 'react';
import {addPostAC, updatePostAC} from "../../Redux/State";



const InfoProfile = (props) => {
    let elementRef = React.createRef()

    let addPost = () => {
        props.dispatch(addPostAC())
    }

    let updatePost = () => {
        let text = elementRef.current.value
        props.dispatch(updatePostAC(text))
    }


    return (
        <div>
            <div>Avatarka</div>
            <div><textarea ref={elementRef} value={props.state.textProfile} onChange={updatePost}/></div>
            <div><button onClick={addPost}>add post</button></div><br/>
        </div>
    )
}


export default InfoProfile;