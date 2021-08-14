import logo from "./logo.svg";
import "./App.css";
import { atom, useRecoilState } from "recoil";
import React, { useEffect } from "react";

const reposState = atom({
  key: "repos",
  default: [],
});

function App() {
  const [repos, setRepos] = useRecoilState(reposState);

  useEffect(() => {
    const getRepos = async () => {
      const url = `https://gtrend.yapie.me/repositories?since=monthly&spoken_language_code=en`;
      const resp = await fetch(url);
      const body = await resp.json();
      setRepos(body);
    };

    getRepos();
  }, []);

  return (
    <>
      {repos?.map((repo) => (
        <div key={repo.url}>
          <a href={repo.url}>
            {repo.author}/{repo.name}
          </a>
        </div>
      ))}
    </>
  );
}

export default App;
