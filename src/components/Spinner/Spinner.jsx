import { Box } from "@mui/material";
import { SyncLoader } from "react-spinners";

const Spinner = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
      marginX="auto"
    >
      <Box>
        <SyncLoader color="var(--dark-blue)" size={20}/>
      </Box>
    </Box>
  );
};

export default Spinner;
