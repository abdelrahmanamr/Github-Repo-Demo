import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProfilePic from "../static/img/Profile.jpg";
import { Avatar, CardHeader, Badge } from "@material-ui/core";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   minWidth: 250,
  // },
  title: {
    fontSize: 14,
  },
  large: {
    width: theme.spacing(37),
    height: theme.spacing(37),
    padding: 0
  },
  statusColor: {
    backgroundColor: "#EEEEEE",
    color: theme.palette.text.primary,
  },
  fullwidth:{
      width: "100%"
  },
  titleFont:{
      fontWeight:"600"
  },
  buttonFont:{
    fontWeight:"500"
  }
}));

export default function PersonalInfo() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent={
              <Avatar className={classes.statusColor}>
                <SentimentSatisfiedOutlinedIcon/>
              </Avatar>
            }
          >
            <Avatar
              alt="Abdelrahman Salem"
              src={ProfilePic}
              className={classes.large}
            />
          </Badge>
        }
      />
      <CardContent>
        <Typography variant="h5" component="h2" className = {classes.titleFont} >
          Abdelrahman Amr
        </Typography>
        <Typography  variant="h5" component="h2" className = {classes.titleFont}>
          Salem
        </Typography>
        <Typography gutterBottom variant="h6" color= "textSecondary" >
          abdelrahmanamr
        </Typography>
        <Typography gutterBottom variant="body1"  >
          Software developer living in Munich,
          Germany. Currently working with node and react for website development. 
        </Typography>

        <Button variant="outlined" className = {classes.fullwidth}>
        <Typography gutterBottom variant="body2" className = {classes.buttonFont} >
          Edit Profile
        </Typography>
        </Button>

      </CardContent>
    </Card>
  );
}
