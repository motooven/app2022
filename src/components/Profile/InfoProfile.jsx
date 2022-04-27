import React from 'react';
import {addPostAC, updatePostAC} from "../../Redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import Avatar from "../../Logotip/user_03.png"


const InfoProfile = (props) => {
    if (props.users.length === 0) {
        return <Preloader/>
    }

    let elementRef = React.createRef()

    let addPost = () => {
        //let text = e.currentTarget.value
        props.addPost()
    }

    let updatePost = () => {
        let text = elementRef.current.value
        props.updatePost(text)
    }

    return (
        <div className="ProfileStyles">
            <img src={props.users.photos.small ? props.users.photos.small : Avatar }/>
            <div>aboutMe: {props.users.aboutMe}</div>
            {/*<div>contacts: {props.users.contacts}</div>*/}
            <div>fullName: {props.users.fullName}</div>
            <div>lookingForAJob: {props.users.lookingForAJob}</div>
            <div>lookingForAJobDescription: {props.users.lookingForAJobDescription}</div>

            <div>userId: {props.users.userId}</div>
            <br/>
            <div>Avatarka</div>
            <div><textarea ref={elementRef} value={props.state.textProfile} onChange={updatePost}/></div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            <br/>
        </div>
    )
}

export default InfoProfile;
/*
aboutMe: "я круто чувак 1001%"
contacts: {facebook: 'facebook.com', website: null, vk: 'vk.com/dimych', twitter: 'https://twitter.com/@sdf', instagram: 'instagra.com/sds', …}
fullName: "samurai dimych"
lookingForAJob: true
lookingForAJobDescription: "не ищу, а дурачусь"
photos: {small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0', large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'}
userId: 2*/
