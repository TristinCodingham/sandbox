import { InputLabel } from "@mui/material"
import { useId } from "react"

export const inputWithLabelProps = (WrappedComponent) => (props) => {
  const id = useId();

  return (
    <div style={{ position: "relative" }}>
      <InputLabel shrink sx={{ position: "absolute" }}>
        {props?.label}
      </InputLabel>
      <WrappedComponent {...props} id={id} />
    </div>
  )
}