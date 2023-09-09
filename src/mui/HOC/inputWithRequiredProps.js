import React from 'react'
import styled from 'styled-components';

export const inputWithRequiredProps = (WrappedComponent) => (props) => {
  console.log('inputWithRequiredProps before', props);
  const containerProps = { ...props?.containerProps };
  const inputProps = {
    ...props?.inputProps,
    required: true,
    startAdornment: (<>{props?.inputProps?.startAdornment}<RequiredIndicator /></>)
  };
  const newProps = {
    ...props,
    isRequired: true,
    inputProps,
    containerProps
  }
  console.log('inputWithRequiredProps after', newProps);

  return (
    <WrappedComponent {...newProps} />
  );
};
const RequiredIndicator = styled.div`
  height: 100%;
  width: 3px;
  background-color: ${props => props.isDisabled ? "lightgray" : props.isCompleted ? "green" : "red"};
  position: absolute;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;