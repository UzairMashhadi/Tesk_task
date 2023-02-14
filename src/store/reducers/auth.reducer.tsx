import { setToken, setUser } from "../slices/auth.slice";
import { postRequest } from "../../config/axiosConfig";
import { toast } from "react-toastify";

export function signInAsync(email: string, password: string): any {
  return async (dispatch: any, _getState: any) => {
    try {
      const result = await postRequest("login", {
        email,
        password,
      });
      if (result?.data?.user?.role?.includes("admin")) {
        console.log(result.data, "token");

        dispatch(setToken(result.data.token.accessToken));
        dispatch(setUser(result.data.user));
      } else {
        throw Error("User is Not Authorized");
      }
    } catch (error: any) {
      const errMsg = error?.response?.data
        ? error?.response?.data?.message
        : error;
      throw Error(errMsg);
    }
  };
}
//logout
export function logoutAsync(): any {
  return async (dispatch: any) => {
    dispatch(setToken(""));
    dispatch(setUser({}));
    dispatch({ type: "signout/logout" });
    return true;
  };
}
