import React from 'react'
import Input from './Input'
import InputContainer from './InputContainer'

export default function SingleLine({ top, bottom, prefix, suffix, ...props }) {
  return (
    <InputContainer top={top} bottom={bottom} prefix={prefix} suffix={suffix} isDisabled={props?.isDisabled} isError={props?.isError}>
      <Input {...props} />
    </InputContainer>
  )
}