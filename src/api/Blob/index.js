import axios from "axios";
import store from "../../app/store";
import {
  activeLoading,
  deActiveLoaing,
} from "../../feautures/loading/loadingSlice";

export const postBlob = async (file) => {
  debugger;
  store.dispatch(activeLoading());
  let formData = new FormData();

  formData.append("file", file[0]);
  try {
    const res = await axios.post(
      `http://194.5.205.113:2014/Blob/Upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    store.dispatch(deActiveLoaing());

    return res.data;
  } catch (err) {
    store.dispatch(deActiveLoaing());
    throw err;
  }
};
