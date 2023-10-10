import { db } from "../Services/db";

const getData = async (data) => {
  try {
    await db.users.clear();
    await db.users.bulkAdd(data.results);
    const response = await db.users.toArray();
    console.log(response.length);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
