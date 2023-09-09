import CompoundExamples from "./compound";
import MUIExamples from "./mui";
import StandardExamples from "./standard";
import "./App.css";

function App() {
  return (
    // <MUIExamples />
    <>
      <div style={{ height: "100px", backgroundColor: "#fff" }}></div>
      {/* <StandardExamples /> */}
      <CompoundExamples />
    </>
  );
}

export default App;
