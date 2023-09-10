import { useState } from "react";

export default function useInputProps(
  type = "text",
  label = "",
  initialValue = null,
  pattern = "w+d+",
  title = "",
  required = true,
  disabled = false,
  readOnly = false,
  error = () => ""
) {
  const [value, setValue] = useState(initialValue);
  const [errorText, setErrorText] = useState(error(initialValue));

  return [
    {
      type,
      value,
      onChange: (e) => setValue(e.target.value),
      pattern,
      title,
      onInvalid: (e) =>
        setErrorText(e.target.validationMessage + " " + e.target.title),
      onInput: (e) =>
        setErrorText(e.target.validationMessage + " " + e.target.title),
      required: required,
      disabled: disabled,
      readOnly: readOnly,
    },
    label,
    initialValue,
    errorText,
  ];
}
