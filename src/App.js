import CompoundExamples from "./compound";
import MUIExamples from "./mui";
import StandardExamples from "./standard";
import "./App.css";
import CSSExample from "./css";
// import Faac from "./faac/index.faac";
import Input from "./compound/components/controls/Input";
import useInputProps from "./compound/utils/hooks/useInputProps";
import { memo } from "react";

function App() {
  return (
    <>
      <div style={{ marginTop: "40px" }}></div>
      <CompoundExamples />
      {/* <MUIExamples /> */}
      {/* <CSSExample /> */}
      {/* <StandardExamples /> */}
      {/* <Faac /> */}
    </>
  );
}

export default App;
