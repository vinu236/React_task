import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonModal from "./ButtonModal";

const UserCard = ({ userData }) => {
  const {
    name: { title, first, last },
    picture,
    login: { uuid },
  } = userData;

  return (
    <Card
      sx={{
        minWidth: 290,
        maxWidth: 290,
        padding: 2,
        paddingBottom: 0,
        borderRadius: 7,
        bgcolor: "#f5f5f5",
        boxShadow: 0,
      }}
    >
      <CardMedia
        component={"img"}
        alt="user-card"
        height={"140"}
        image={picture.large}
        sx={{ borderRadius: 4 }}
      />
      <CardContent>
        <Typography
          component={"div"}
          gutterBottom
          variant="h5"
          sx={{ padding: 0 }}
        >
          {`${title} ${first} ${last}`}
        </Typography>
        <CardActions>
          <ButtonModal id={uuid} />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default UserCard;
