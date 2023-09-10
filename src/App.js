import CompoundExamples from "./compound";
import MUIExamples from "./mui";
import StandardExamples from "./standard";
import "./App.css";
import CSSExample from "./css";
import "./built-ins/components/Input/input.css";
import Faac from "./faac/index.faac";
import Input from "./compound/components/controls/Input";

function App() {
  return (
    // <MUIExamples />
    <>
      {/* <CSSExample /> */}
      <Input.Form>
        <CompoundExamples />
        <button type="submit">Submit</button>
      </Input.Form>
      {/* <StandardExamples /> */}
      {/* 
      <form
        onSubmit={(e) => e.preventDefault()}
        onInvalid={(e) => e.preventDefault()}
        className="form"
      >
        <Input />
        <br />
        <Input />
        <Input />
        <Input />
        <button type="submit">Submit</button>
      </form> */}
      {/* <Faac /> */}
    </>
  );
}

export default App;
