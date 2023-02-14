import { Action, createSelector } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const selectToken = (state: any) => state.auth.token;
export const selectUser = (state: any) => state.auth.user;
