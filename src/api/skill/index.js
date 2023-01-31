import axios from "../index";
const baseApiUrl = "UserSkill"
export const getAllSkill = async (data) => {
    try {
        const res = await axios.get(baseApiUrl);
        return res
    } catch (err) {
        throw err;
    }
}

export const putSkill = async (data) => {
    try {
        const res = await axios.put(baseApiUrl, data);
        return res
    } catch (err) {
        throw err;
    }
}