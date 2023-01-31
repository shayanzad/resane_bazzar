import axios from "../index";
const baseApiUrl = "WorkRecord"
export const getWorkRecord = async (data) => {
    try {
        const res = await axios.get(baseApiUrl);
        return res
    } catch (err) {
        throw err;
    }
}

export const postWorkRecord = async (data) => {
    try {
        const res = await axios.post(baseApiUrl, data);
        return res
    } catch (err) {
        throw err;
    }
}

export const deleteWorkRecord = async (data) => {
    try {
        const res = await axios.delete(baseApiUrl+`?id=${data}`);
        return res
    } catch (err) {
        throw err;
    }
}

export const getWorkRecordByid = async (data) => {
    try {
        const res = await axios.get(baseApiUrl+`/${data}`);
        return res
    } catch (err) {
        throw err;
    }
}

export const putWorkRecord = async (data) => {
    try {
        const res = await axios.put(baseApiUrl,data);
        return res
    } catch (err) {
        throw err;
    }
}