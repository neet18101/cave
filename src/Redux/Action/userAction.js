import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  USER_LOGIN_FAIL,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";
const config = {
  headers: { Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_TOKEN}` },
};

export const userAction = (user) => async (dispatch) => {
  try {
    console.log(user, "user");
    dispatch({ type: USER_REGISTER_REQUEST });
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/register`,
      user,
      config
    );
    // console.log(data, "api response");
    if (data.success === false) {
      toast.error(data.msg, {
        duration: 3000, // Toast will be shown for 3 seconds
      });
    } else {
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      setTimeout(() => {
        window.location.href = "/login";
      }, 4000);
      toast.success(data.msg, {
        duration: 3000, // Toast will be shown for 3 seconds
      });
    }
  } catch (error) {
    toast.error("Registration Failed", {
      duration: 3000, // Toast will be shown for 3 seconds
    });
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userActionLogin = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/login`,
      user,
      config
    );
   console.log(data, "api response");
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
