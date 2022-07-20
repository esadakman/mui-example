import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { useContext, useState } from "react";
import Cards from "../components/Cards";
import AppPagination from "../components/AppPagination";
import mockData from "../mock_data";
import { PaginateContext } from "../context/PaginateContext";
export default function Home() {
  const users = mockData.slice(0, 100);
  const [pageNumber, setPageNumber] = useState(0);
  const { usersPerPage } = useContext(PaginateContext);

  let pagesVisited = (pageNumber - 1) * usersPerPage;

  // console.log(pagesVisited);
  // const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage);

  const pageCount = Math.round(users.length / usersPerPage);

  return (
    <Container>
      <Typography
        variant="h4"
        align="center"
        m={2}
        color="error"
        sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
      >
        Students
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Cards users={users} pagesVisited={pagesVisited} />
      </Grid>
      <AppPagination
        pageCount={pageCount}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </Container>
  );
}

// const fetchInstructors = async () => {
//   setLoading(true);
//   const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//   setInstructors(res.data);
//   setLoading(false);
// };
// useEffect(() => {
//   fetchInstructors();
// }, []);
// console.log(instructors);
// const indexOfLastInst = currentPage * instPerPage;
// const indexOfFirstInst = indexOfLastInst - instPerPage;
// const currentInst = instructors.slice(indexOfFirstInst, indexOfLastInst);
// console.log(instructors.length);
