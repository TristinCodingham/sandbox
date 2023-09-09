import { Icon } from "@mui/material";
import React from "react";
import LockIcon from '@mui/icons-material/Lock';

export const inputWithDisabledProps = (WrappedComponent) => (props) => {
  console.log('inputWithDisabledProps before', props);
  const containerProps = { ...props?.containerProps };
  const inputProps = {
    ...props?.inputProps,
    readOnly: true,
    endAdornment: (<>{props?.inputProps?.endAdornment}<Icon><LockIcon /></Icon></>)
  };
  const newProps = {
    ...props,
    disabled: true,
    inputProps,
    containerProps
  }
  console.log('inputWithDisabledProps after', newProps);

  return (
    <WrappedComponent {...newProps} />
  );
};
