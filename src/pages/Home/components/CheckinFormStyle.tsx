import styled from "@emotion/styled";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import theme from "../../../theme";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: "1.8rem",
    borderBottom: "2rem solid #F6F6F6",
    color: "#333333",
    fontWeight: 600,
  },
}));

const styles = {
  createFormBtn: {
    width: "100%",
    maxWidth: "26.1rem",
    fontWeight: 600,
    fontSize: "1.8rem",
    lineHeight: "3rem",
    textTransform: "capitalize",
    height: "6rem",
    borderRadius: "1rem",
    boxShadow: "none",
    maxHeight: "5rem",
    [theme.breakpoints.down("md")]: {
      maxWidth: "fit-content",
    },
  },
  headWithBtn: {
    display: "flex",
    gap: "8rem",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      gap: "2rem",
      justifyContent: "space-between",
    },
  },
  backArrow: {
    width: "5rem",
    minWidth: "5rem",
    height: "5rem",
    background: "#fff",
    padding: "1.3rem",
    svg: {
      width: "100%",
      height: "100%",
      transform: " rotateY(180deg)",
    },
  },
  typo: {
    // fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "35px",
    lineHeight: "52px",
    color: "#333333",
    marginBottom: "1.6rem",
  },
  tableHead: {
    ".MuiTableCell-root": {
      color: "#333333",
      fontWeight: 500,
      fontSize: "1.8rem",
      lineHeight: "2.7rem",
      backgroundColor: "#F6F6F6",
      border: "none !important",
      boxShadow: "none !important",
    },
  },
  tableCell: {
    ".MuiTableCell-root": {
      borderWidth: "2rem",
      fontSize: "4rem",
    },
  },
  menuItems: {
    fontSize: "1.8rem",
    color: "#299AFF",
    fontWeight: 500,
  },
  tableName: {
    width: "6.7rem",
    minWidth: "6.7rem",
    height: "6.7rem",
    backgroundColor: "#299AFF",
    padding: "0.9rem",
    borderRadius: "1rem",
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
  },
  tableClass: {
    width: "100%",
    overflow: "hidden",
    marginTop: "2.5rem",
    boxShadow: "none",
    borderRadius: "0",
  },
};

export default styles;
