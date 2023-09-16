import CompoundExamples from "./compound";
import MUIExamples from "./mui";
import StandardExamples from "./standard";
import "./App.css";
import CSSExample from "./css";
// import Faac from "./faac/index.faac";
import Input from "./compound/components/controls/Input";
import useInputProps from "./compound/utils/hooks/useInputProps";
import { memo } from "react";

function CustomInput1({ inputProps, label, error }) {
  return (
    <Input.Group {...inputProps}>
      <Input.Container>
        <Input.Label className="label-hover">
          <label>{label}</label>
        </Input.Label>
        <Input.Prefix>
          <span>KG</span>
        </Input.Prefix>
        <Input.Control>
          <input />
        </Input.Control>
        <Input.Suffix>
          <span>&times;</span>
        </Input.Suffix>
        <Input.Output>
          <output className="error">{error}</output>
        </Input.Output>
      </Input.Container>
    </Input.Group>
  );
}

const CustomInput1Memo = memo(CustomInput1);

function CustomInput2({ inputProps, error }) {
  return (
    <Input.Group {...inputProps}>
      {/* <Input.Label className="label-hover block">
        <span>{label}</span>
      </Input.Label> */}
      <Input.Container>
        <Input.Prefix>
          <span>KG</span>
          <span>g</span>
          <span>Ton</span>
        </Input.Prefix>
        <Input.Control>
          <input />
        </Input.Control>
        <Input.Suffix>
          <span>&times;</span>
        </Input.Suffix>
        <Input.Output>
          <output className="error">{error}</output>
        </Input.Output>
      </Input.Container>
    </Input.Group>
  );
}

const CustomInput2Memo = memo(CustomInput2);

function CustomInput3({ inputProps, label, error }) {
  return (
    <Input.Group {...inputProps}>
      <Input.Container>
        <Input.Label className="label-hover block">
          <label>{label}</label>
        </Input.Label>
        {/* <Input.Prefix>
          <span>KG</span>
          <span>g</span>
          <span>Ton</span>
        </Input.Prefix> */}
        <Input.Control>
          <input />
        </Input.Control>
        {/* <Input.Suffix>
          <span>&times;</span>
        </Input.Suffix> */}
        <Input.Output>
          <output className="error">{error}</output>
        </Input.Output>
      </Input.Container>
    </Input.Group>
  );
}

const CustomInput3Memo = memo(CustomInput3);

function App() {
  const [input1Props, label1, , error1] = useInputProps(
    "number",
    "Weight",
    0,
    "[0-9]"
  );
  const [input2Props, label2, , error2] = useInputProps(
    "text",
    "",
    "",
    "[a-zA-Z0-9]+"
  );
  const [input3Props, label3, , error3] = useInputProps(
    "email",
    "Email",
    "",
    null
  );
  return (
    // <MUIExamples />
    <>
      <div style={{ marginTop: "40px" }}></div>
      {/* <CSSExample /> */}
      <Input.Form>
        <div style={{ display: "grid", gap: "10px" }}>
          <CustomInput1Memo
            inputProps={input1Props}
            label={label1}
            error={error1}
          />
          <CustomInput2Memo inputProps={input2Props} error={error2} />
          <CustomInput3Memo
            inputProps={input3Props}
            label={label3}
            error={error3}
          />
          <button type="submit">Submit</button>
        </div>
      </Input.Form>
      {/* <StandardExamples /> */}

      {/* <form
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
