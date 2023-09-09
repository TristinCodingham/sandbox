import { Stack } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

export default function InputContainer({ top, bottom, prefix, suffix, isDisabled, isError, children }) {
  return (
    <Stack>
      {top}
      <InputContainerStyle isDisabled={isDisabled} isError={isError}>
        {prefix}{children}{suffix}
      </InputContainerStyle>
      {bottom}
    </Stack>
  )
}

const InputContainerStyle = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  outline: 2px solid ${props => props?.isDisabled ? "lightgray" : props?.isError ? "red" : ""};

  &:focus-within {
    outline: 2px solid lightblue;
  }
`;
