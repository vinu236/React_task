import { useEffect, useState } from "react";
import getData from "../Services/fetchData";
import fetchApi from "../api/api";
import { useDispatch } from "react-redux";
import { setUsersData } from "../Redux/usersDataSlice";
import { db } from "../Services/db";


const useGetData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getDataDb = async () => {
      try {
        const response = await db.users.toArray();

        //if data is present in the indexed db  then we don't have to fetch for new data,
        if (response.length === 0) {
          setIsLoading(true);
          const { data, status } = await fetchApi();
          const resData = await getData(data);
          dispatch(setUsersData(resData));
        } else {
          dispatch(setUsersData(response));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getDataDb();
  }, []);

  return [isLoading];
};

export default useGetData;
