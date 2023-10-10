import { Box } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import getData from "../Services/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { setUsersData } from "../Redux/usersDataSlice";
import { setLoading } from "../Redux/loadingSlice";
import fetchApi from "../api/api";



const RefreshButton = () => {
  


  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.loading);

  const style = {
    position: "fixed",
    bottom: "8%",
    right: "1.5%",
    width: 60,
    height: 60,
    borderRadius: "100px",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: isLoading ? "not-allowed" : "pointer",
    // outLine:'none',
    border: "none",
  };

  const handleRefresh = () => {
    dispatch(setLoading(true));
    refreshData();
  };

  const refreshData = async () => {
    try {
      const { data } = await fetchApi();
      console.log(data);
      const resData = await getData(data);

      dispatch(setUsersData(resData));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Box
      sx={style}
      component={"button"}
      onClick={handleRefresh}
      disabled={isLoading}
    >
      <RefreshIcon sx={{ color: "white" }} />
    </Box>
  );
};

export default RefreshButton;
