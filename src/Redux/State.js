import rerenderApp from "../index";

const state = {

    profilePage: [
        {id:1, message: "Eee"},
        {id:2, message: "Eeeee"},
        {id:3, message: "Eeeeeeee"},
    ],

    dialogPage: [
        {id:1, name: "Oleg", message: "Eee"},
        {id:2, name: "Vita", message: "Eeeee"},
        {id:3, name: "Diams", message: "Eeeeeeeee"},
    ],

}

export const addPostProfile = (text) => {
    let newPost = {
        id: 4,
        message: text
    }
    state.profilePage.push(newPost)
    rerenderApp()

}

export default state