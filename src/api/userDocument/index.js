import axios from "../index";
const baseApiUrl = "UserDocument";
export const postUserDocument = async (data) => {
  try {
    const res = await axios.post(baseApiUrl, data);
    return res.data;
  } catch (err) {
    throw err;
  }
};
export const deleteUserDocument = async (data) => {
  debugger;
  try {
    const res = await axios.delete(baseApiUrl + `?id=${data}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
export const getUserDocument = async () => {
  try {
    const res = await axios.get(baseApiUrl);
    return res.data;
  } catch (err) {
    throw err;
  }
};
