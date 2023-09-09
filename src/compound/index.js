import React from 'react'
import Input from './components/controls/Input'
import useInputProps from './utils/hooks/useInputProps'
//import './components/controls/input.css';

const Styles = ({ children }) => <style>{children}</style>

export default function CompoundExamples() {
  const [inputProps, label, , error,] = useInputProps("number", "Weight", 0, (value) => value === 0 && "cannot be 0");

  console.log('inputProps', inputProps);

  return (
    <>
      <Styles>
        {`
          .group {

          }

          .label {
            color: red;
            font-weight: bold;
          }

          .label-hover:hover {
            color: blue;
          }

          .container {

          }

          .prefix {

          }

          .control {

          }

          .suffix {

          }
        `}
      </Styles>
      <Input.Group {...inputProps} error={error}>
        <Input.Label className='label-hover block'><span>{label} {error}</span></Input.Label>
        <Input.Container>
          <Input.Prefix><>KG</></Input.Prefix>
          <Input.Control>
            <input style={{ border: "none" }} />
          </Input.Control>
          <Input.Suffix>&times;</Input.Suffix>
        </Input.Container>
      </Input.Group>
    </>
  )
}