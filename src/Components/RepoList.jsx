import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Button, Divider,Box } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { RepoIcon } from "@primer/octicons-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRepo, updateRepo } from "../store/actions/repoActions";
import Result from "./Result";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: "100%",
  },
  fullHeight: {
    height: "100%",
    width: "100%",
    //   background:"#2ea44f"
  },
  buttonColor: {
    background: "#2ea44f",
  },
  buttonAlign: {
    textAlign: "right",
  },
  filterAlign: {
    textAlign: "center",
  },
}));

function SearchingInfo(props) {
  const isSearching = props.isSearching;
  console.log("da5al fel search info")
  console.log(props)
  if (isSearching) {
    return(
    <Grid item xs={12}>
      <Typography gutterBottom>
      <Box fontWeight={700} display='inline'>{props.listSize} </Box>
      results for repositories matching <Box fontWeight={700} display='inline'>{props.searchingValue}</Box>
      </Typography>
      <Divider/>
    </Grid>
    
    );
  }
  else{
    return null;
  }
}

function RepoList(props) {
  const classes = useStyles();
  useEffect(() => {
    props.getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { repos, initialData } = props;
  var [searchingValue, setSearchingValue] = React.useState("");
  var [searching, setSearching] = React.useState(false);
  var [listSize, setListSize] = React.useState(0);
  console.log("value of initial data");
  console.log(initialData);
  

  const filterByName = (event) => {
    setSearchingValue(event.target.value)
    console.log(event.target.value);
    var list = initialData;
    if (event.target.value === "") {
      props.updateRepo(initialData);
      setSearching(false);
      setListSize(list.length);
    } else {
      setSearching(true);
      list = initialData.filter((repo) =>
        repo.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      props.updateRepo(list);
      setListSize(list.length);
      
    }
  };

  const handleChange = (event) => {};

  return (
    <Grid container spacing={1} justify="space-between">
      <Grid item xs={12} md={6}>
        <TextField
          id="outlined-basic"
          label="Find a repository.."
          variant="outlined"
          fullWidth
          onChange={filterByName}
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <FormControl
              variant="outlined"
              className={classes.fullWidth}
              size="small"
            >
              <InputLabel htmlFor="outlined-age-native-simple">Type</InputLabel>
              <Select
                native
                value="Type"
                onChange={handleChange}
                label="Type"
                inputProps={{
                  name: "Type",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>All</option>
                <option value={20}>Public</option>
                <option value={30}>Private</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl
              variant="outlined"
              className={classes.fullWidth}
              size="small"
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Language
              </InputLabel>
              <Select
                native
                value="Language"
                onChange={handleChange}
                label="Language"
                inputProps={{
                  name: "Language",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>All</option>
                <option value={20}>JavaScript</option>
                <option value={30}>Java</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl
              variant="outlined"
              className={classes.fullWidth}
              size="small"
            >
              <InputLabel htmlFor="outlined-age-native-simple">Sort</InputLabel>
              <Select
                native
                value="Sort"
                onChange={handleChange}
                label="Sort"
                inputProps={{
                  name: "Sort",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Last updated</option>
                <option value={20}>Name</option>
                <option value={30}>Stars</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={1} className={classes.buttonAlign}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#2ea44f",
          }}
          color="primary"
          size="medium"
          startIcon={<RepoIcon />}
          className={classes.fullHeight}
        >
          NEW
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <SearchingInfo isSearching={searching} searchingValue={searchingValue} listSize={listSize} />
      <Grid item xs={12}>
        <Result reposList={repos} />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    repos: state.repo.repos,
    initialData: state.repo.initialData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => dispatch(getRepo()),
    updateRepo: (updatedList) => dispatch(updateRepo(updatedList)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RepoList));
