import React from 'react';
import RepoItem from './RepoItem';
export default function Result(props) {
  return (
    <div>
        {props.reposList.map((repo) => (
          <RepoItem key={repo.id} repo = {repo}/>
        ))}
    
    </div>
  );
}
