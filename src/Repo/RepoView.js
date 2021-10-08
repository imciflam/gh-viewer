import React from "react";

const RepoView = ({ repo }) => {
  return (
    <div key={repo.url}>
      <a href={repo.url}>
        {repo.author}/{repo.name}
      </a>
      <div>{repo.description}</div>
      <div>
        {repo.stars} stars / {repo.forks} forks
      </div>
    </div>
  );
};

export default RepoView;
