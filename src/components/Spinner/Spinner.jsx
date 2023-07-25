import { Box } from "@mui/material";
import { CircleLoader } from "react-spinners";

const Spinner = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box>
        <CircleLoader color="var(--dark-blue)" size={150}/>
      </Box>
    </Box>
  );
};

export default Spinner;
