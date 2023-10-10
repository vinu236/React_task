import { Box, Typography, Button, Stack } from "@mui/material";

const ConfirmDelete = ({ onCloseModal, onDelete, isloading }) => {
  return (
    <Box sx={{}}>
      <Typography component={"h3"} sx={{ marginBottom: 2 }}>
        Delete
      </Typography>
      <Typography component={"p"} sx={{ marginBottom: 2 }}>
        Are you sure you want to delete this ? This action cannot be undone.
      </Typography>
      <Stack
        direction={"row"}
        useFlexGap
        spacing={4}
        justifyContent={"end"}
        alignItems={"center"}
      >
        <Button variant="contained" onClick={onCloseModal} disabled={isloading}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onDelete}>
          Delete
        </Button>
      </Stack>
    </Box>
  );
};

export default ConfirmDelete;
