import Home from "./Pages/Home";
import useGetData from "./Hooks/useFetchData";
import CardLoading from "./Components/CardLoader";
import Spinner from "./Components/Spinner"




const App = () =>{

  const [isLoading]= useGetData()

  if(isLoading){
    return  <Spinner/>
  }
  return(
   <Home/>
  )
}


export default App;