import axios from "../index";

const baseUrl = "Register";

export const postRegister = async (data) => {
  try {
    const res = await axios.post(baseUrl, data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const postRegisterOtp = async (data) => {
  try {
    const res = await axios.post(baseUrl + "/RegisterUserByOtp", data);
    return res.data;
  } catch (err) {
    throw err;
  }
};
