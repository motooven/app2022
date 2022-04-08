import React from 'react';



const InfoProfile = (props) => {

    let elementRef = React.createRef()
    let addPost = () => {
        let text = elementRef.current.value
        props.addPostProfile(text)
        elementRef.current.value = ""
    }


    return (
        <div>
            <div>Avatarka</div>
            <div><textarea ref={elementRef}/></div>
            <div><button onClick={addPost}>add post</button></div><br/>
        </div>
    )
}


export default InfoProfile;