import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ConfirmDelete from "./ConfirmDelete";
import { useDispatch } from "react-redux";
import { db } from "../Services/db";
import { setUsersData } from "../Redux/usersDataSlice";
import deleteUserApi from "../Services/deleteUserApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const ButtonModal = ({ id }) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleDelete = () => {
    setIsLoading(true);
    handleDeleteApi();
  };

  const handleDeleteApi = async () => {
    try {
      await deleteUserApi(id);
      const data = await db.users.toArray();
      dispatch(setUsersData(data));
    } catch (error) {
      console.log(error);
    } finally {
      handleClose();
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button size="sm" variant="contained" onClick={handleOpen}>
        Button
      </Button>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ConfirmDelete
            onCloseModal={handleClose}
            onDelete={handleDelete}
            isloading={isLoading}
          />
        </Box>
      </Modal>
    </>
  );
};

export default ButtonModal;
