import axios from "../index";
const baseApiUrl = "UserInformation";
export const putUserInformation = async (data) => {
  try {
    const res = await axios.put(baseApiUrl, data);
    return res.data;
  } catch (err) {
    throw err;
  }
};
export const getUserInformation = async () => {
  try {
    const res = await axios.get(baseApiUrl);
    return res.data;
  } catch (err) {
    throw err;
  }
};
