import { Box, Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const CardLoading = () => {
  const cardCount = Array.from({ length: 50 });

  return (
    <Box bgcolor={"#e9eef2"} padding={4} paddingTop={15}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        useFlexGap
        spacing={5}
        flexWrap={"wrap"}
      >
        {cardCount.map(() => {
          return (
            <>
              <Skeleton
                variant="rectangular"
                width={290}
                height={200}
                sx={{ borderRadius: 4 }}
              />
            </>
          );
        })}
      </Stack>
    </Box>
  );
};

export default CardLoading;
