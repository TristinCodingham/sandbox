import { useState } from "react";

export default function useInputProps(type, label, initialValue, error = () => "") {
  const [value, setValue] = useState(initialValue);
  const [errorText, setErrorText] = useState(error(initialValue));

  const handleChange = (e) => {
    setErrorText(error(e.target.value));
    setValue(e.target.value);
  }
  const handleErrorText = () => setErrorText(error(value));

  return [
    {
      type,
      value,
      onChange: handleChange,
    },
    label,
    initialValue,
    errorText,
    handleErrorText
  ]
}
