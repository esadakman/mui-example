import { Pagination } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "fixed",
    bottom: 0,
    zIndex: 4,
    // backgroundColor: "green",
    padding: "10px 80px",
    color: "white",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    coloe: "white",
  },
}));

const AppPagination = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Pagination
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          variant="outlined"
          count={3}
        />
      </div>
    </div>
  );
};

export default AppPagination;
