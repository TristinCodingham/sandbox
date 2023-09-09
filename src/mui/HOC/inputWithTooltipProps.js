

import { Tooltip } from '@mui/material';
import React from 'react'

export const inputWithTooltipProps = (WrappedComponent) => (props) => {
  console.log('inputWithTooltipProps', props);
  const containerProps = { ...props?.containerProps };
  const inputProps = {
    ...props?.inputProps,
  };
  const newProps = {
    ...props,
    inputProps,
    containerProps
  }

  return (
    <Tooltip title={props?.tooltip} {...props?.tooltipProps}>
      <WrappedComponent {...newProps} />
    </Tooltip>
  );
};
