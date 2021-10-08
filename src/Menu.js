import React from "react";
import { useRecoilState } from "recoil";
import { view as viewAtom } from "./atoms";

export default () => {
  const viewOptions = ["daily", "weekly", "monthly"];
  const [view, setView] = useRecoilState(viewAtom);
  return (
    <nav className="menu">
      {viewOptions.map(viewOption => (
        <a
          className={`menu-item ${view === viewOption ? "text-bold" : ""}`}
          href="#"
          onClick={() => setView(viewOption)}
          key={viewOption}
        >
          Trending {viewOption}
        </a>
      ))}
    </nav>
  );
};
