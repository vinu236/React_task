import { db } from "./db";

const deleteUserApi = async (id) => {
  return await db.transaction("rw", db.users, async () => {
    await db.users.where("login.uuid").equals(id).delete();
  });
};

export default deleteUserApi;
