import axiosInstance from "./axios";



const fetchApi = async()=>{
    const response=await axiosInstance.get('/?results=50');
    console.log(response);
        return response;
 


}
export default fetchApi;