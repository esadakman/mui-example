// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  // Button,
  // CardActionArea,
  // CardActions,
  Container,
} from "@mui/material";
// import data from "../data";
import AppPagination from "../components/AppPagination";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";

export default function Home() {
  // const [courses, setCourse] = React.useState(data);
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [instPerPage] = useState(2);

  const fetchInstructors = async () => {
    setLoading(true);
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setInstructors(res.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchInstructors();
  }, []);
  // console.log(instructors);
  const indexOfLastInst = currentPage * instPerPage;
  const indexOfFirstInst = indexOfLastInst - instPerPage;
  const currentInst = instructors.slice(indexOfFirstInst, indexOfLastInst);
  console.log(instructors.length);
  return (
    <Container>
      <Typography
        variant="h4"
        align="center"
        m={4}
        color="error"
        sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
      >
        COURSES
      </Typography>

      <Cards instructors={currentInst} loading={loading} />

      <AppPagination
        instPerPage={instPerPage}
        totalInsts={instructors.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
}

// {data.map((card) => {
//         const { id, name, text, img } = card;
//         return (
//           <Grid item key={id} xs={12} sm={6} md={4}>
//             <Card>
//               <CardActionArea>
//                 <CardMedia component="img" image={img} alt={name} />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {text}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//               <CardActions>
//                 <Button size="small" color="primary">
//                   Share
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         );
//       })}
