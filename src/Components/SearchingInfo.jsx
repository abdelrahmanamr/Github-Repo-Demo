import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { XCircleFillIcon } from "@primer/octicons-react";
import { Grid, Button, Divider, Box } from "@material-ui/core";

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
    closeButtonColor: {
      color: "#586069",
    },
  }));
export default function SearchingInfo(props) {
    const classes = useStyles();
    const isSearching = props.isSearching;
    const refreshPage = () => {
      window.location.reload();
    };
    if (isSearching) {
      return (
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <Box fontWeight={700} display="inline">
                {props.listSize}{" "}
              </Box>
              results for repositories matching{" "}
              <Box fontWeight={700} display="inline">
                {props.searchingValue}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.buttonAlign}>
            <Button
              onClick={refreshPage}
              color="primary"
              className={classes.closeButtonColor}
              startIcon={<XCircleFillIcon />}
            >
              <Typography>clear filters</Typography>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
      );
    } else {
      return null;
    }
  }