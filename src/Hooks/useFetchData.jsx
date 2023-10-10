import { useEffect, useState } from "react";
import getData from "../Services/fetchData";
import fetchApi from "../api/data";
import { useDispatch } from "react-redux";
import { setUsersData } from "../Redux/usersDataSlice";
import { db } from "../Services/db";
const useGetData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getDatai = async () => {
      try {
        const response = await db.users.toArray();
        console.log(response);
        //if data is present in the indexed db  then we don't have to fetch for new data,
        if (response.length === 0) {
          setIsLoading(true);
          const { data, status } = await fetchApi();
          console.log(data);
          const resData = await getData(data);
          dispatch(setUsersData(resData));
        } else {
          dispatch(setUsersData(response));
        }

        console.log(response);
      } catch (error) {
        console.log(error);
        
      }finally{
        setIsLoading(false);
      }
    };
    getDatai();
  }, []);

  return [isLoading];
};

export default useGetData;
