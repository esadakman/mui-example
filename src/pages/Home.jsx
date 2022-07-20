import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { useContext, useState } from "react";
// import axios from "axios";
import Cards from "../components/Cards";
import AppPagination from "../components/AppPagination";
import mockData from "../mock_data";
import { PaginateContext } from "../context/PaginateContext";
export default function Home() {
  const users = mockData.slice(0, 100);
  // const [pageNumber, setPageNumber] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const { usersPerPage } = useContext(PaginateContext);
  const pagesVisited = pageNumber * usersPerPage;

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

// const [courses, setCourse] = React.useState(data);
// const [instructors, setInstructors] = useState([]);
// const [loading, setLoading] = useState(false);
// const [currentPage, setCurrentPage] = useState(1);
// const [instPerPage] = useState(2);

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

// {instructors.map((inst) => {
//           const { id, name, phone } = inst;
//           return (
//             <Grid container item key={id} xs={12} sm={6} md={4}>
//               <Card>
//                 <CardActionArea>
//                   <CardMedia
//                     component="img"
//                     image={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
//                     alt={name}
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                       {name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {phone}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//                 <CardActions>
//                   <Button size="small" color="primary">
//                     Share
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           );
//         })}
