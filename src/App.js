import logo from "./logo.svg";
import "./App.css";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import React, { useEffect } from "react";
import { repos as reposAtom, view as viewAtom } from "./atoms";

function App() {
  const [repos, setRepos] = useRecoilState(reposAtom);
  const view = useRecoilValue(viewAtom);

  useEffect(() => {
    const getRepos = async () => {
      const url = `https://gtrend.yapie.me/repositories?since=${view}&spoken_language_code=en`;
      const resp = await fetch(url);
      const body = await resp.json();
      setRepos(body);
    };

    getRepos();
  }, [view]);

  return (
    <>
      {repos?.map(repo => (
        <div key={repo.url}>
          <a href={repo.url}>
            {repo.author}/{repo.name}
          </a>
          <div>{repo.description}</div>
          <div>
            {repo.stars} stars / {repo.forks} forks
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
