import axios from "axios";
import { notification} from 'antd';
import { activeLoading, deActiveLoaing } from "../feautures/loading/loadingSlice";
import store from "../app/store"
let baseURL = window.shahrdari_api_url+`/api/`;


const config = {
  baseURL: `${baseURL}/`,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(config);

const token = () => typeof window ==="object" && localStorage.getItem("token");

axiosInstance.interceptors.request.use((config) => {


  config.withCredentials = true
  store.dispatch(activeLoading())


  //document.body.classList.add('loading-indicator');
  // if (token()) {
  //   config.headers.Authorization = `Bearer ${token()}`;
  // }
  return config;
});

axiosInstance.interceptors.response.use(  
  
  (response) => {

    config.withCredentials = true
   // document.body.classList.remove('loading-indicator');
  
    console.log(store);
    store.dispatch(deActiveLoaing())
    return response;
  },
  (error) => {

   // document.body.classList.remove('loading-indicator');
    
    store.dispatch(deActiveLoaing())
     
    // if (error.message) {

    //   if (error.message === "Network Error") {
    //     //TODO refactor this section completLy
    //   }
    //   const errorMessage = error.message.toLowerCase().trim();
    //   const xmlError =
    //     "failed to execute 'setrequestheader' on 'xmlhttprequest': value is not a valid bytestring.";
    //   if (errorMessage === xmlError) {
    //     //TODO refactor this section completLy
    //   }
    // }

    const { response } = error;
    if (response) {      
         
      const originalRequest =response.config;
      const  status  = response.status;
      if (status) {    
        if(status==400)       {
          notification.error({
            message: response.data.meta.errors[0].errors[0],
            placement: "bottomLeft",
          });
        }
        else if(status===405){
          notification.error({
            message: `${response.data.Error.Message}`,
            description: "",
            placement:"bottomRight"
          });
          if(localStorage.getItem('checkHasInfo')){
            setTimeout(()=>{
              localStorage.setItem("checkHasInfo",false);
              localStorage.setItem('fromCart',true);
              window.location.href="/profile";
            },1500);
          }
   
        }
        else if (status === 401) {   

          localStorage.removeItem("token")          
          window.location.href="/login";
          let rf=localStorage.getItem("rfToken");
          originalRequest._retry = true;
          return axios.post(baseURL+'/auth/Authenticate/refreshToken?refreshToken='+rf).then((res)=>{
            if(res.status===200){
              localStorage.clear();
              localStorage.setItem("token", res.data.data.token);
              localStorage.setItem("rfToken", res.data.data.refreshToken);
              originalRequest.headers.Authorization="Bearer "+res.data.data.token;
              return axios(originalRequest);
            }
            if(res.status===500){
              return;
            }
                      
          });
        }else{
          notification.error({
            message: `${response.data.Error.Message}`,
            description: "",
            placement:"bottomRight"
          });
        }
      }
    }
    return Promise.reject(error);
  }
);



export default axiosInstance;
