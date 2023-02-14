import { Typography } from "@mui/material";
import SpotTable from "./components/SpotTable";

const index = () => {
  return (
    <div style={{ padding: "100px" }}>
      <Typography
        sx={{ fontSize: "50px", fontWeight: 700, textAlign: "center" }}
      >
        Spots
      </Typography>
      <SpotTable />
    </div>
  );
};

export default index;
