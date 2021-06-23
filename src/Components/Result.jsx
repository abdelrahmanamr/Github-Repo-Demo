import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RepoItem from './RepoItem';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Result(props) {
  const classes = useStyles();
  console.log("Da5al el makan")
    console.log(props.repos)
  return (
    <div>
        {props.reposList.map((repo) => (
          <RepoItem key={repo.id} repo = {repo}/>
        ))}
    
    </div>
  );
}
