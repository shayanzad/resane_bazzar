import axios from "../index";

export const getFiles=async (data)=>{
    debugger
try{
const res=await axios.get(`v1/File/GetFilesAndFolders?PageSize=50&PageIndex=1`);


return res.data;
}catch(err){

}
}