import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";
import { Section } from "../../interfaces/interfaces";

interface InitialState {
    value: number,
    status: string,
    isAuth: boolean,
    language: string,
    mode: PaletteMode,
    sections: any,
    pictures: any

}

const initialState: InitialState = {
value: 0,
status: "ok",
isAuth: false,
language: "es",
mode: "light",
sections: [],
pictures: []
}

export const global = createSlice({
    name: "global",
initialState,
reducers: {
    valueAdder: (state, {payload}) => {
        state.value = state.value + payload
    },
    setAllSections: (state, {payload}) => {
        state.sections = payload
    },
    setAllPictures: (state, {payload}) => {
        state.sections = payload
    },
    setIsAuth: (state, {payload}) => {
        state.isAuth = payload
    },
    changeStatus: (state, {payload}) => {
        if(state.status === "ok"){
            state.status = "loading"
        } if(state.status === "loading")
        state.status = "ok"
    },
    changeLanguage: (state) => {
        if(state.language === "en"){
            state.language = "es"
        } else if(state.language === "es")
        state.language = "en"
    },
    changeMode: (state) => {
        if(state.mode === "light"){
            state.mode = "dark"
        } else if(state.mode === "dark")
        state.mode = "light"
    },
}

})

export const reducer = global.actions;