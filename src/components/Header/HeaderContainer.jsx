import {connect} from "react-redux";
import Headers from "./Headers";
import {nezaloginAC, zaloginAC} from "../../Redux/authReducer";
import HeadersApiObertka from "./HeadersApiObertka";




const mstp = (state) => {
    return {
        auth: state.auth
    }
}

const mdtp = (dispatch) => {
    return {
        yesLogin: (data) => {dispatch(zaloginAC(data))},
        noyLogin: (data) => {dispatch(nezaloginAC(data))}
    }
}

export const HeaderContainer = connect(mstp, mdtp)(HeadersApiObertka)