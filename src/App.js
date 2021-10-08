import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import React, { useEffect } from "react";
import { repos as reposAtom, view as viewAtom } from "./atoms";
import Menu from "./Menu";

function App() {
  const [repos, setRepos] = useRecoilState(reposAtom);
  const view = useRecoilValue(viewAtom);

  useEffect(() => {
    const getRepos = async () => {
      const url = `https://gtrend.yapie.me/repositories?since=${view}&spoken_language_code=en`;
      const resp = await fetch(url);
      const body = await resp.json();
      setRepos(
        Object.assign({}, repos, {
          [view]: body
        })
      );
    };

    getRepos();
  }, [view]);

  return (
    <>
      {/*no need to pass something to menu*/}
      <Menu />
      {repos[view] ? (
        <ul>
          {repos[view].map(repo => (
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
        </ul>
      ) : (
        <span>No repos found</span>
      )}
    </>
  );
}

export default App;
