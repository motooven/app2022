import React from "react";
import Headers from "./Headers";
import  axios from "axios";


class HeadersApiObertka extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                this.props.yesLogin(response.data.data)
        })
    }

    render() {
        return <Headers  auth={this.props.auth}/>
    }
}

export default HeadersApiObertka