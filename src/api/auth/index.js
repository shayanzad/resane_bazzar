import axios from "axios";
import jwt_decode from "jwt-decode";
import store from "../../app/store";
import {
  activeLoading,
  deActiveLoaing,
} from "../../feautures/loading/loadingSlice";

export const LogOut = () => {};

export const loginApi = async (data) => {
  debugger;
  console.log(store);
  store.dispatch(activeLoading());

  try {
    const res = await axios.post(
      window.sso_api_url +
        `/api/v1/Authenticate?username=${data.username}&password=${data.password}&clientId=${data.clientId}`,
      {},
      {
        withCredentials: true,
      }
    );
    
    //localStorage.setItem("token", res.data.data.access_token);
    store.dispatch(deActiveLoaing());

    return res.data;
  } catch (err) {
    store.dispatch(deActiveLoaing());
    throw err;
  }
};
export const confirmApi = async (data) => {
  try {
    const res = await axios.post(
      "auth/Otp/Verify",
      data,
      {},
      {
        withCredentials: true,
      }
    );
    //localStorage.clear();
    //localStorage.setItem("token", res.data.data.token);
    //localStorage.setItem("rfToken", res.data.data.refreshToken);
    return res;
  } catch (err) {
    throw err;
  }
};
