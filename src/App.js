import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import React, { useEffect } from "react";
import { repos as reposAtom, view as viewAtom } from "./atoms";
import Menu from "./Menu";
import ReposContainer from "./Repos/index";

function App() {
  return (
    <>
      <div className="container-lg my-4">
        {/*no need to pass something down*/}
        <Menu />
        <div className="Box">
          <ReposContainer />
        </div>
      </div>
    </>
  );
}

export default App;
