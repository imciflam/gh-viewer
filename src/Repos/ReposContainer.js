import { useRecoilState, useRecoilValue } from "recoil";
import React, { useEffect } from "react";
import { repos as reposAtom, view as viewAtom } from "../atoms";
import RepoView from "../Repo/index";

export const ReposContainer = () => {
  const [repos, setRepos] = useRecoilState(reposAtom);
  const view = useRecoilValue(viewAtom);

  useEffect(() => {
    const getRepos = async () => {
      const url = `https://gtrend.yapie.me/repositories?since=${view}&spoken_language_code=en`;
      const resp = await fetch(url);
      const body = await resp.json();
      // cacheing previous requests through objects
      setRepos(
        Object.assign({}, repos, {
          [view]: body
        })
      );
    };

    getRepos();
  }, [view]);

  return repos[view] ? (
    <ul>
      {repos[view].map(repo => (
        <RepoView repo={repo} />
      ))}
    </ul>
  ) : (
    <span>No repos found</span>
  );
};

export default ReposContainer;
