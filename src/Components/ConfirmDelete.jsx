import { Box, Typography, Button, Stack } from "@mui/material";

const ConfirmDelete = ({ onCloseModal, onDelete, isloading }) => {
  const buttonStyle = {
    backgroundColor: 'black', // Set the background color to black
    color: 'white',
  };
  return (
    <Box >
      <Typography component={"h3"} sx={{ marginBottom: 2, fontFamily:"cursive" }}>
        Delete
      </Typography>
      <Typography component={"p"} sx={{ marginBottom: 2 ,fontFamily:"cursive"}}>
        Are you sure you want to delete this ? This action cannot be undone.
      </Typography>
      <Stack
        direction={"row"}
        useFlexGap
        spacing={4}
        justifyContent={"end"}
        alignItems={"center"}
      >
        <Button variant="contained" onClick={onCloseModal} disabled={isloading} style={buttonStyle}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onDelete} style={buttonStyle}>
          Delete
        </Button>
      </Stack>
    </Box>
  );
};

export default ConfirmDelete;
