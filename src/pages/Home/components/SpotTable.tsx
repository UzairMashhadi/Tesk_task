import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography, Stack } from "@mui/material";
import { useGetAllClientsQuery } from "../../../services/admin";
import UserMenu from "./Menu";
import ProfileImg from "../../../assests/images/profile.png";
import { StyledDataGrid } from "./StyledDataGrid";

const row = [
  {
    id: 1,
    title: "spot 1",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    review: "5",
  },
  {
    id: 2,
    title: "spot 2",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    review: "10",
  },
  {
    id: 3,
    title: "spot 3",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    review: "15",
  },
];

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    minWidth: 500,
    sortable: false,
    renderCell: (params: any) => {
      return (
        <Typography
          sx={{ fontSize: "1.5rem", color: "#2165A2", fontWeight: "700" }}
        >
          {params?.row?.title}
        </Typography>
      );
    },
  },
  {
    field: "image",
    headerName: "Image",
    flex: 0.8,
    renderCell: (params: any) => {
      const image = params?.row?.image;
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Box
            component="img"
            src={image ? image : ProfileImg}
            sx={{
              width: "3rem",
              height: "3rem",
              borderRadius: "1rem",
              objectFit: "cover",
            }}
          />
        </Box>
      );
    },
  },
  {
    field: "reviews",
    headerName: "Reviews",
    minWidth: 500,
    sortable: false,
    renderCell: (params: any) => {
      return (
        <Typography
          sx={{ fontSize: "1.5rem", color: "#2165A2", fontWeight: "700" }}
        >
          {params?.row?.review}
        </Typography>
      );
    },
  },
  {
    field: "action",
    headerName: "",
    maxWidth: 65,
    sortable: false,
    renderCell: (params: any) => {
      return <UserMenu user={params?.row} />;
    },
  },
];

export default function SpotTable() {
  const { data } = useGetAllClientsQuery(1, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div style={{ height: 400, width: "100%", marginTop: "4rem" }}>
      <DataGrid
        rows={row || []}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
        sx={StyledDataGrid}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        disableDensitySelector
        disableExtendRowFullWidth
        disableSelectionOnClick
        components={{
          NoRowsOverlay: () => (
            <Stack height="100%" alignItems="center" justifyContent="center">
              <Typography
                sx={{ color: "#2165A2", fontSize: "2rem", fontWeight: 600 }}
              >
                No Clients Data Found
              </Typography>
            </Stack>
          ),
        }}
      />
    </div>
  );
}
