import { Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "fixed",
    bottom: 0,
    zIndex: 4,
    padding: "10px 80px",
    color: "white",
  },
  container: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
}));

const AppPagination = ({ pageCount, pageNumber, setPageNumber }) => {
  const classes = useStyles();

  const onPageChanged = (event, value) => {
    // console.log(value);
    setPageNumber(value);
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
          count={pageCount}
          page={pageNumber}
          onChange={onPageChanged}
          defaultPage={pageNumber}
          color="primary"
        />
      </div>
    </div>
  );
};

export default AppPagination;
