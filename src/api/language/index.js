import axios from "../index";
const baseApiUrl = "Language"
export const getLanguage = async (data) => {
    try {
        const res = await axios.get(baseApiUrl);
        return res
    } catch (err) {
        throw err;
    }
}

export const postLanguage = async (data) => {
    try {
        const res = await axios.post(baseApiUrl, data);
        return res
    } catch (err) {
        throw err;
    }
}

export const deleteLanguage = async (data) => {
    try {
        const res = await axios.delete(baseApiUrl+`?id=${data}`);
        return res
    } catch (err) {
        throw err;
    }
}

export const getLanguageByid = async (data) => {
    try {
        const res = await axios.get(baseApiUrl+`/${data}`);
        return res
    } catch (err) {
        throw err;
    }
}

export const putLanguage = async (data) => {
    try {
        const res = await axios.put(baseApiUrl,data);
        return res
    } catch (err) {
        throw err;
    }
}