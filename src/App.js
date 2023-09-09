import CompoundExamples from "./compound";
import MUIExamples from "./mui";
import StandardExamples from "./standard";
import "./App.css";
import CSSExample from "./css";
import Input from "./built-ins/components/Input/Input";

function App() {
  return (
    // <MUIExamples />
    <>
      {/* <StandardExamples /> */}
      <CompoundExamples />
      <CSSExample />
      <Input />
    </>
  );
}

export default App;
