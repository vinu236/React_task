import { Box } from "@mui/material";
import UserCardContainer from "../Components/CardContainer";
import RefreshButton from "../Components/RefreshButton";



const Home = ()=>{

    return(
        <Box component={"main"}>
            <UserCardContainer />
            <RefreshButton/>
        </Box>
    )
}


export default Home;    


