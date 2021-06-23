import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Paper, Grid, Divider } from "@material-ui/core";
import PersonalInfo from "../Components/PersonalInfo";
import SimpleTabs from "../Components/SimpleTabs";
import RepoList from "../Components/RepoList";

const styles = (theme) => ({
  mainContainer: {
    padding: theme.spacing(2),
  },
});
class Repo extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainContainer}>
        <Paper>
          <Grid container spacing={1} className={classes.mainContainer}>
            <Grid item xs={12} md={3}>
              <PersonalInfo />
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <SimpleTabs />
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <RepoList />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(Repo)));
