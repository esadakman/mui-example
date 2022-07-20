import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  //   Container,
} from "@mui/material";
// import data from "../data";
const Cards = ({ loading, users, pagesVisited }) => {
  const usersPerPage = 3;

  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage);
  return (
    <>
      {displayUsers.map((inst) => {
        const { id, firstName, email } = inst;
        return (
          <Grid key={id} item xs={6} sm={4} md={1}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
                  alt="asd"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    align="center"
                  >
                    {firstName}
                  </Typography>
                  <Typography variant="p" color="text.secondary" align="center">
                    {/* Contact: */}
                    {email}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default Cards;

// {instructors.map((inst) => {
//   const { id, name, phone } = inst;
//   return (
//     <Grid key={id} item xs={12} sm={6} md={4} sx={{ bgcolor: "red" }}>
//       <Card>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             image={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
//             alt="asd"
//           />
//           <CardContent>
//             <Typography
//               gutterBottom
//               variant="h5"
//               component="div"
//               align="center"
//             >
//               {name}
//             </Typography>
//             <Typography
//               variant="body2"
//               color="text.secondary"
//               align="center"
//             >
//               Contact:{phone}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Share
//           </Button>
//         </CardActions>
//       </Card>
//     </Grid>
//   );
// })}
