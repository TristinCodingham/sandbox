import { useCallback, useMemo, useState } from "react";

export default function useInputProps(
  type = "text",
  label = "",
  initialValue = null,
  pattern = "",
  title = "",
  required = true,
  disabled = false,
  readOnly = false,
  error = () => ""
) {
  const [value, setValue] = useState(initialValue);
  const [errorText, setErrorText] = useState(error(initialValue));

  const onChange = useCallback((e) => setValue(e.target.value), []);
  const onInvalid = useCallback(
    (e) => setErrorText(e.target.validationMessage + " " + e.target.title),
    []
  );
  const onInput = useCallback(
    (e) => setErrorText(e.target.validationMessage + " " + e.target.title),
    []
  );

  const inputProps = useMemo(
    () => ({
      type,
      value,
      onChange,
      pattern,
      title,
      onInvalid,
      onInput,
      required: required,
      disabled: disabled,
      readOnly: readOnly,
    }),
    [
      disabled,
      onChange,
      onInput,
      onInvalid,
      pattern,
      readOnly,
      required,
      title,
      type,
      value,
    ]
  );

  return [inputProps, label, initialValue, errorText];
}
