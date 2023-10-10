import {db} from './db';
import getData from './fetchData';
import { setUsersData } from '../Redux/usersDataSlice';

const deleteUserApi = async (id,setLoading,dispatch) => {
  try {
    await db.transaction('rw', db.users, async () => {
      await db.users.where('login.uuid').equals(id).delete();
        
    })
    const data =await getData()
    dispatch(setUsersData(data));
    handleClose()
    setLoading(false)
  } catch (error) {
    console.error(`Error deleting record: ${error}`);
  }
}

export default deleteUserApi;
