import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Container,
} from "@mui/material";
import data from "../data";
import AppPagination from "../components/AppPagination";

export default function Home() {
  // const [courses, setCourse] = React.useState(data);

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
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <AppPagination />
        {data.map((card) => {
          const { id, name, text, img } = card;
          return (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={img} alt={name} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {text}
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
      </Grid>
    </Container>
  );
}
