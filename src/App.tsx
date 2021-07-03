import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectList from "screens/project-list";
import TsReactTest from "screens/ts-react-tsst";

function App() {
  return (
    <div className="App">
      <ProjectList />
      <TsReactTest />
    </div>
  );
}

export default App;
