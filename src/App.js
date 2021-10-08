import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import React, { useEffect } from "react";
import { repos as reposAtom, view as viewAtom } from "./atoms";
import Menu from "./Menu";
import ReposContainer from "./Repos/index";

function App() {
  return (
    <>
      {/*no need to pass something to menu*/}
      <Menu /> <ReposContainer />
    </>
  );
}

export default App;
