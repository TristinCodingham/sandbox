import React from 'react'

export default function InputContainer({ label, prefixes, input, suffixes, tooltip }) {
  return (
    <>
      <div style={inputContainerStyle}>
        {label}
        {prefixes}
        {input}
        {suffixes}
      </div>
    </>
  )
}
const inputContainerStyle = {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  height: "30px"
}