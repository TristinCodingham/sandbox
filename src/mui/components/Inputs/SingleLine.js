import { InputBase, Stack } from '@mui/material'
import React from 'react'

export default function SingleLine({ type, label, value, setValue, containerProps, inputProps }) {
  console.log('SingleLine props', containerProps, inputProps);
  return (
    <Stack {...containerProps} position="relative">
      <InputBase type={type} label={label} value={value} onChange={setValue} {...inputProps} />
    </Stack>
  )
}