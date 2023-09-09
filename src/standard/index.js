import React from 'react'
import SingleLine from './components/controls/SingleLine'
import useSingleLine from './utils/hooks/useSingleLine';

export default function StandardExamples() {
  const [inputProps, label, initialValue, error, setError] = useSingleLine("text", "Name", "", (value) => value?.length === 0 ? "cannot be empty" : "");

  console.log('inputProps', inputProps);
  console.log('initialValue', initialValue);
  console.log('error', error);
  console.log('setError', setError);

  return (
    <SingleLine inputProps={inputProps} label={label} />
  )
}
