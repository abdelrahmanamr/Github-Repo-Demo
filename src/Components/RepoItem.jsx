import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Link, Button, Divider } from "@material-ui/core";
import { StarIcon } from "@primer/octicons-react";
import TimelineDot from "@material-ui/lab/TimelineDot";
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  boldText: {
    fontWeight: "600",
  },
  buttonAlignment: {
    // paddingLeft:theme.spacing(5),
    textAlign: "right",
  },
  yellow:{
      backgroundColor:"#f1e05a",
      marginLeft:theme.spacing(0.5)
  },
  brown:{
    backgroundColor:"#b07219",
    marginLeft:theme.spacing(0.5)
  },
  green:{
    backgroundColor:"#178600",
    marginLeft:theme.spacing(0.5)
  }
}));

export default function RepoItem(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const preventDefault = (event) => event.preventDefault();

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="stretch"
      spacing={1}
    >
      <Grid item xs={6}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.boldText}>
              <Link href="#" onClick={preventDefault}>
                {props.repo.name}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="body1">
            {props.repo.description}
            </Typography>
          </Grid>
          <TimelineDot className={classes.brown}/>
          <Grid item xs={2}>
          
            <Typography gutterBottom variant="caption">
            {props.repo.language}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography gutterBottom variant="caption">
            Updated on {moment(props.repo.created_at).format("MMM DD, YYYY")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} className={classes.buttonAlignment}>
        <Button variant="outlined" size="small" startIcon={<StarIcon />}>
          Star
        </Button>
      </Grid>
      <Grid item xs={12}>
          <Divider/>
      </Grid>
    </Grid>
  );
}
