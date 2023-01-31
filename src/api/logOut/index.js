import axios from "../index";
const baseApiUrl = window.sso_api_url+"/api/v1/User/LogOutCurrentUser";
export const logOutMethode = async (data) => {
  try {
    const res = await axios.post(baseApiUrl, data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

