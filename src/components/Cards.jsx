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
const Cards = ({ instructors, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {instructors.map((inst) => {
        const { id, name, phone } = inst;
        return (
          <Grid
            container
            spacing={2}
            key={id}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={4}>
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
                      variant="h5"
                      component="div"
                      align="center"
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      Contact:{phone}
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
          </Grid>
        );
      })}
    </div>
  );
};

export default Cards;
