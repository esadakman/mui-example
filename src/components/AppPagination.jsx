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

const AppPagination = ({
  instPerPage,
  totalInsts,
  currentPage,
  setCurrentPage,
}) => {
  const classes = useStyles();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalInsts / instPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Pagination
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          variant="outlined"
          count={pageNumbers.length}
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AppPagination;
