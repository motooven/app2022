import React from 'react';
import {addPostAC, updatePostAC} from "../../Redux/profileReducer";



const InfoProfile = (props) => {
    let elementRef = React.createRef()

    let addPost = (e) => {
        let text = e.currentTarget.value
        props.dispatch(addPostAC(text))
    }

    let updatePost = () => {
        let text = elementRef.current.value
        props.dispatch(updatePostAC(text))
    }


    return (
        <div>
            <div>Avatarka</div>
            <div><textarea ref={elementRef} value={props.state.profile.textProfile} onChange={updatePost}/></div>
            <div><button onClick={addPost}>add post</button></div><br/>
        </div>
    )
}


export default InfoProfile;