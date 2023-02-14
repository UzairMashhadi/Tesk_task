import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import classes from "./CheckinFormStyle";
import { useNavigate } from "react-router-dom";
// import CustomizedDialogs from "../../ManageUser/components/ViewModal";

export default function UserMenu({ user }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          minWidth: "33px",
        }}
      >
        <MoreVertIcon fontSize="large" sx={{ color: "#333333" }} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            width: "10rem",
          },
        }}
      >
        <MenuItem sx={classes.menuItems}>View</MenuItem>
        <MenuItem
          sx={classes.menuItems}
          onClick={() => {
            handleClose();
            navigate(`/edit-spot/${user.id}`);
          }}
        >
          Edit
        </MenuItem>
        <MenuItem sx={classes.menuItems}>Add</MenuItem>
      </Menu>
    </div>
  );
}
