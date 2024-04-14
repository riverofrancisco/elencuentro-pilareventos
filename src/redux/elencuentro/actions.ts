import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { reducer } from "./slice";
import { RootState } from "../store";

export const authSetter = (isauth: boolean): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.setIsAuth(isauth))
}}

export const LanguageSwitcher = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.changeLanguage());
}}

export const ModeSwitcher = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.changeMode());
}}

export const SectionsSetter = (allSections: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.setAllSections(allSections));
}}

//GALLERY
export const PicturesSetter = (allPictures: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.setAllPictures(allPictures));
}}