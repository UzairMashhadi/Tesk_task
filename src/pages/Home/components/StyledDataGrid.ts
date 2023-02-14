export const StyledDataGrid = {
  border: 0,
  color: "3A3A3A",
  fontFamily: "Poppins",
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  backgroundColor: "#fff",
  borderRadius: "1.4rem",
  root: {
    "&.MuiDataGrid-root .MuiDataGrid-cell:focus": {
      outline: "none",
    },
  },
  px: "2rem",
  "& .MuiDataGrid-menuIconButton": {
    padding: "2px",
    "& svg": {
      fontSize: "20px",
    },
  },
  "& .MuiDataGrid-columnHeaderDraggableContainer": {
    "&:focus": {
      outline: "none",
    },
  },
  "& .MuiCheckbox-root": {
    "& .MuiSvgIcon-root": {
      width: "2rem",
      height: "2rem",
    },
  },
  "& .MuiDataGrid-main": {
    borderRadius: "9px",
  },
  "& .MuiDataGrid-columnHeaders": {
    border: "none",
    top: "-1px",
  },
  "& .MuiDataGrid-iconSeparator": {
    // display: "none",
    visibility: "hidden",
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "#FFF",
    borderBottom: "0.5px solid #F4F4F4",
    borderRight: "none",
    height: "54px",
    overflow: "hidden !important",
  },
  "& .MuiDataGrid-columnHeader:first-of-type": {
    borderTopLeftRadius: "8px",
  },
  "& .MuiDataGrid-columnHeader:last-of-type": {
    borderTopRightRadius: "8px",
    borderRight: 0,
  },
  "& .MuiDataGrid-columnHeader .MuiDataGrid-columnHeaderTitle": {
    fontWeight: 700,
    fontSize: "1.8rem",
  },
  "& .MuiDataGrid-cell": {
    //borderRight: "0.5px solid #B5C1D2",
    color: "#333333",
    fontSize: "1.6rem",
    fontWeight: 600,
    "&:focus": {
      outline: "none",
    },
  },
  "& .MuiDataGrid-cell:last-child": {
    borderRight: "none",
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: "none",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },
  "& .MuiDataGrid-row": {
    "& .MuiDataGrid-cell:first-of-type": {
      padding: 0,
    },
    "&:hover": {
      backgroundColor: "#dce3fc9e !important",
      cursor: "pointer",
    },
  },
  "& .MuiDataGrid-row:nth-of-type(even)": {
    backgroundColor: "#F9FAFC",
    "& .MuiDataGrid-cell": {
      borderTop: "1px solid #b5c1d2ad",
      borderBottom: "1px solid #b5c1d2ad",
    },
  },
  "& .MuiDataGrid-cell .text-out": {
    color: "#FF5F56",
  },
  "& .MuiDataGrid-columnHeaderTitleContainer": {
    justifyContent: "space-between",
    "&:focus": {
      outline: "none",
    },
    "& .MuiDataGrid-iconButtonContainer": {
      "& .MuiButtonBase-root": {
        fontSize: "1.8rem",
        color: "#2165A2",
      },
    },
  },
  "& .MuiButtonBase-root": {
    borderRadius: "4px",
  },
  "& .MuiButtonBase-root:hover": {
    borderRadius: "4px",
  },
  "& .MuiBadge-badge": {
    right: "4px",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    color: "#3A3A3A",
    textOverflow: "clip",
    whiteSpace: "break-spaces",
    lineHeight: 1.3,
  },
  "& .MuiDataGrid-footerContainer": {
    paddingRight: "10px",
    "& .MuiTablePagination-actions": {
      "& .MuiButtonBase-root": {
        padding: "6px",
      },
      "& .MuiSvgIcon-root": {
        fontSize: "20px",
      },
    },
  },
  "& .MuiTablePagination-toolbar": {
    "& .MuiTablePagination-displayedRows": {
      fontSize: "1.6rem",
    },
  },
};
