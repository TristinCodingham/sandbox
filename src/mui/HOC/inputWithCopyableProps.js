import React, { useRef } from 'react'
import copy from 'copy-to-clipboard';
import hasNoValue from '../utils/helpers/hasNoValue';
import { IconButton, Tooltip } from '@mui/material';
import ContentCopy from '@mui/icons-material/ContentCopy';

export const inputWithCopyableProps = (WrappedComponent) => (props) => {
  console.log('inputWithCopyTextProps before', props);
  const ref = useRef();

  const copyText = (value) => {
    console.log('copyText', value);
    copy(value);
    const animation = [
      { backgroundColor: "white" },
      { backgroundColor: hasNoValue(value) ? "red" : "lightgreen" },
      { backgroundColor: hasNoValue(value) ? "#ffc0c0" : "#dbffdb" }
    ];
    const timing = {
      duration: 1000,
      iterations: 1,
      easing: "ease-in-out"
    }
    console.log('ref.current', ref.current);
    ref.current.animate(animation, timing);
    ref.current.select();
    ref.current.style.backgroundColor = hasNoValue(value) ? "#ffc0c0" : "#dbffdb";
  }

  const containerProps = {
    ...props?.containerProps
  }
  const inputProps = {
    ...props?.inputProps,
    endAdornment: (<>{props?.inputProps?.endAdornment}<Tooltip placement="right" title={"Click to copy"}><IconButton size='small' sx={{ padding: "0" }} onClick={() => copyText(props?.value)}><ContentCopy fontSize='small' /></IconButton></Tooltip></>),
    inputRef: ref,
  }
  const newProps = {
    ...props,
    inputProps,
    containerProps
  }
  console.log('inputWithCopyTextProps after', newProps);
  return (
    <WrappedComponent {...newProps} />
  )
}
