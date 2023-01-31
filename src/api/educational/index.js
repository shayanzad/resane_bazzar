import axios from "../index";
const baseApiUrl = "EducationalRecord"
export const getEducational = async (data) => {
    try {
        const res = await axios.get(baseApiUrl);
        return res
    } catch (err) {
        throw err;
    }
}

export const postEducational = async (data) => {
    try {
        const res = await axios.post(baseApiUrl, data);
        return res
    } catch (err) {
        throw err;
    }
}

export const deleteEducational = async (data) => {
    try {
        const res = await axios.delete(baseApiUrl+`?id=${data}`);
        return res
    } catch (err) {
        throw err;
    }
}

export const getEducationalByid = async (data) => {
    try {
        const res = await axios.get(baseApiUrl+`/${data}`);
        return res
    } catch (err) {
        throw err;
    }
}

export const putEducational = async (data) => {
    try {
        const res = await axios.put(baseApiUrl,data);
        return res
    } catch (err) {
        throw err;
    }
}