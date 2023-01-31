import axios from "../index";
const baseApiUrl = "Position"
export const getPosition = async (data) => {
    try {
        const res = await axios.get(baseApiUrl);
        return res
    } catch (err) {
        throw err;
    }
}

export const postPosition = async (data) => {
    try {
        const res = await axios.post(baseApiUrl, data);
        return res
    } catch (err) {
        throw err;
    }
}

export const putPosition = async (data) => {
    try {
        const res = await axios.put(baseApiUrl, data);
        return res
    } catch (err) {
        throw err;
    }
}

export const getPositionById = async (data) => {
    try {
        const res = await axios.get(baseApiUrl+`/${data}`);
        return res
    } catch (err) {
        throw err;
    }
}

export const deletePosition = async (data) => {
    try {
        const res = await axios.delete(baseApiUrl+`?id=${data}`);
        return res
    } catch (err) {
        throw err;
    }
}