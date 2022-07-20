import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import { useContext } from "react";
import { PaginateContext } from "../context/PaginateContext";
const Cards = ({ users, pagesVisited }) => {
  const { usersPerPage } = useContext(PaginateContext);
  let page = 0;
  pagesVisited < 0 ? (page = 0) : (page = pagesVisited);
  const displayUsers = users.slice(page, page + usersPerPage);
  return (
    <>
      {displayUsers.map((inst, index) => {
        const { id, firstName, lastName, email } = inst;
        return (
          // ! id'yi key olarak verdiğimde her paginate işleminde id değiştiği için gereksiz renderlama oluyordu. Bunu engellemek adına key'i index olarak verdim
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
                  alt="user img"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    align="center"
                  >
                    {firstName} {lastName}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                {/* <Button
                  key="Email"
                  component="a"
                  href="mailto:"
                  size="small"
                  color="primary"
                >
                  Contact
                </Button> */}
                <Typography
                  variant="p"
                  fontSize={"1.2rem"}
                  fontWeight={"900"}
                  // overflow="auto"
                >
                  {email}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default Cards;
