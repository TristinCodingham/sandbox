import React from "react";
import Input from "./components/controls/Input";
import useInputProps from "./utils/hooks/useInputProps";
//import './components/controls/input.css';

export default function CompoundExamples() {
  const [inputProps, label, , error] = useInputProps("number", "Weight", 0);

  console.log("inputProps", inputProps);

  return (
    <Input.Group {...inputProps}>
      <Input.Label className="label-hover block">
        <span>{label}</span>
      </Input.Label>
      <Input.Container>
        <Input.Prefix>
          <>KG</>
        </Input.Prefix>
        <Input.Control>
          <input />
        </Input.Control>
        <Input.Suffix>
          <>&times;</>
        </Input.Suffix>
        <div data-error={error}></div>
      </Input.Container>
    </Input.Group>
  );
}
