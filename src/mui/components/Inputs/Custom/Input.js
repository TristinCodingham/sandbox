import { Stack, Tooltip } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function Input(props) {
  return (
    <Stack position="relative">
      {props?.isRequired && <RequiredIndicator isCompleted={props?.value && props?.error?.length === 0} isDisabled={props?.isDisabled} />}
      <Tooltip title={props?.tooltip}>
        <InputStyle {...props} />
      </Tooltip>
    </Stack>
  );
}

const InputStyle = styled.input`
  border: none;
  width: 100%;
  caret-color: darkgray;
  &:focus-visible {
    outline: none;
  }
`;

const RequiredIndicator = styled.div`
  height: 100%;
  width: 3px;
  background-color: ${props => props.isDisabled ? "lightgray" : props.isCompleted ? "green" : "red"};
  position: absolute;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;