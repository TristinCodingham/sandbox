import React, { useRef } from 'react'
import InputContainer from '../InputContainer/InputContainer';
import InputLabel from '../InputLabel/InputLabel';

export default function SingleLine({ inputProps, label, prefix, suffix, error, ref = null, isFloatingLabel = true }) {
  const inputRef = useRef(ref);

  return (
    <InputContainer
      label={<InputLabel label={`${label} ${error}`} isFloated={isFloatingLabel} inputRef={inputRef} />}
      prefixes={prefix}
      input={<input ref={inputRef} {...inputProps} />}
      suffixes={suffix}
    />
  )
}

