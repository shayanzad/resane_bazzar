import axios from "../index";
const baseApiUrl = "User"

export const UserInfoApi=async()=>{
try{
    const res=await axios.get(baseApiUrl);
    return res.data;
}catch(err){
    throw err;
}
}