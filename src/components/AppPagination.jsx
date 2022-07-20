import { Pagination } from "@mui/material";
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

const AppPagination = ({ pageCount, pageNumber, setPageNumber }) => {
  const classes = useStyles();
  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(totalInsts / instPerPage); i++) {
  //   pageNumbers.push(i);
  // }
  // console.log(pageNumbers);

  const onPageChanged = (event, value) => {
    // ! setPageNumber(value) dediğimde value 1'den başladığı için ilk 10 veri gelmiyordu. Bunu çözmek adına value-1 dedim.
    setPageNumber(value - 1);
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
        />
      </div>
    </div>
  );
};

export default AppPagination;
