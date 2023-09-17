import React, { memo } from "react";
import Input from "./components/controls/Input";
import useInputProps from "./utils/hooks/useInputProps";
//import './components/controls/input.css';

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
      <Input.Container>
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

function CustomInput4({ inputProps, label, error }) {
  return (
    <Input.Group {...inputProps}>
      <Input.Container>
        <Input.Label className="label-hover">
          <label>{label}</label>
        </Input.Label>
        <Input.Prefixes>
          <Input.Prefix>
            <span>&#9881;</span>
          </Input.Prefix>
          <Input.Prefix>
            <span>g</span>
          </Input.Prefix>
          <Input.Prefix>
            <span>Ton</span>
          </Input.Prefix>
        </Input.Prefixes>
        <Input.Control>
          <input />
        </Input.Control>
        <Input.Suffixes>
          <span>&times;</span>
        </Input.Suffixes>
        <Input.Output>
          <output className="error">{error}</output>
        </Input.Output>
      </Input.Container>
    </Input.Group>
  );
}
const CustomInput4Memo = memo(CustomInput4);

export default function CompoundExamples() {
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
  const [input4Props, label4, , error4] = useInputProps(
    "text",
    "Preposition",
    "",
    "[a-zA-Z\\.]+"
  );

  return (
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
        <CustomInput4Memo
          inputProps={input4Props}
          label={label4}
          error={error4}
        />
        <button type="submit">Submit</button>
      </div>
    </Input.Form>
  );
}
