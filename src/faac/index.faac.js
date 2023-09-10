import React from "react";
import Input from "./Input";

export default function Faac() {
  return (
    <>
      <Input.Group
        label="label"
        parent={(children) => <Input.Label>Test</Input.Label>}
      >
        <Input.Label>Test</Input.Label>
      </Input.Group>
    </>
  );
}
