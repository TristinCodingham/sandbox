import React, { useEffect, useState } from 'react'

export default function InputLabel({ label, isFloated, inputRef }) {
  const [labelStyle, setLabelStyle] = useState({
    left: "4px",
    fontSize: "small",
    padding: "0 4px",
    ...(isFloated ?
      ({
        position: "absolute",
        top: document.activeElement === inputRef.current ? "-12px" : "",
        backgroundColor: "#fff",
      })
      : {})
  });

  useEffect(() => {
    if (!isFloated) return;

    console.log('inputRef.current.style', inputRef.current.style)
    //console.log('document.activeElement === inputRef.current', document.activeElement === inputRef.current)
    setLabelStyle(prev => ({
      ...prev,
      top: document.activeElement === inputRef.current ? "-12px" : "",
    }))
  }, [inputRef, isFloated]);

  return (
    <span style={labelStyle}>{label}</span>
  )
}

