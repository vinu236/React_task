import UserCard from "./Card";
import { Box, Stack,Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CardLoading from "./CardLoader";
const UserCardContainer = () => {

  const usersData = useSelector(store=>store.usersData);
  const loading = useSelector(store=>store.loading)
   
  if (loading) {
    return (
     <CardLoading/>)
  }
  
  return (
    <Box bgcolor={"#e9eef2"} padding={4}>
  
   <Typography sx={{marginBottom:4,fontFamily:"cursive", fontSize:30,marginLeft:7,}}>Users ({usersData.length})</Typography>
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
        useFlexGap
        spacing={5}
        flexWrap={"wrap"}
        
    >
      {usersData.map((data,index) => (
        <UserCard key={data?.login.uuid} userData={data}/>
        ))}
    </Stack>   
        </Box>
    
  );
};

export default UserCardContainer;
