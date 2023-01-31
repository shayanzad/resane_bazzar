import axios from "axios";
import { notification} from 'antd';
import { useNavigate  } from "react-router-dom";

//import { reLogin } from "./auth";

//IIS
//let baseURL = "http://192.168.15.32:5505";

//CD
let baseURL = "http://api-gtw.mblt.ir/filemanager-api/api";


const config = {
  baseURL: `${baseURL}/`,
  headers: {
    "Content-Type": "application/json",
  },
};
const axiosInstance = axios.create(config);
api.interceptors.request.use((config) => {
  debugger;
  // if (localStorage.getItem("token"))
  //   config.headers.authorization = `bearer ${localStorage.getItem("token")}`;
  return config;
});

api.interceptors.response.use(
  // function that redirects the user to the login page if the refresh token request fails

  (response) => {
    return response;
  },
  (err) => {
    if (err.response.status === 401) {
      debugger;
      // failed API call config
      const config = err.config;
      let isRefreshing = store.getters["getIsRefreshing"];
      // checks the store state, if there isn't any refresh token proccessing attempts to get new token and retry the failed request
      if (!isRefreshing) {
        return new Promise((resolve, reject) => {
          // updates the state in store so other failed API with 401 error doesnt get to call the refresh token request

          store.commit("SET_IS_REFRESHING", true);
          let refreshToken = localStorage.getItem("refreshToken");

          // refresh token request
          api
            .post(
              `http://194.5.205.113:4097/api/v1/Authenticate/GenerateTokenByRefreshToken?Refreshtoken=${refreshToken}`
            )
            .then((response) => {
              if (response.data.isSuccess) {
                // update the session storage with new token data
                
                localStorage.setItem(
                  "refreshToken",
                  response.data.data.refresh_token
                );
                // retry the failed request
                resolve(api(config));
              } else {
                // rediredt the user to login if refresh token fails
              }
            })
            .catch(() => {
              // rediredt the user to login if refresh token fails
            })
            .finally(() => {
              // updates the store state to indicate the there is no current refresh token request and/or the refresh token request is done and there is updated data in session storage

              store.commit("SET_IS_REFRESHING", false);
            });
        });
      } else {
        // if there is a current refresh token request, it waits for that to finish and use the updated token data to retry the API call so there will be no Additional refresh token request
        return new Promise((resolve, reject) => {
          // in a 100ms time interval checks the store state
          const intervalId = setInterval(() => {
            // if the state indicates that there is no refresh token request anymore, it clears the time interval and retries the failed API call with updated token data
            let isRefreshing = store.getters["getIsRefreshing"];
            if (!isRefreshing) {
              clearInterval(intervalId);
              resolve(api(config));
            }
          }, 100);
        });
      }
    }
  }
);




export default axiosInstance;
