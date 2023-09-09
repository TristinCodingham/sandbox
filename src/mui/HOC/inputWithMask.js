import React from "react";

export const inputWithMask = (Component) => (props) => {
  return (
    <Component
      {...props}
      maxLength={10}
      onKeyDown={(e) => {
        if (e.code === "Backspace") {
          e.preventDefault();
          const splitValue = e.target.value.split("");
          splitValue.pop();
          const newValue = splitValue.join("");
          props.onChange(newValue);
        }
      }}
      onChange={(e) => {
        var v = e.target.value;
        if (v?.length === 1 || v?.length === 4 || v?.length > 5) {
          props.onChange(v);
        } else if (v.match(/^\d{2}$/) !== null) {
          props.onChange(v + "/");
        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
          props.onChange(v + "/");
        }
      }}
    />
  );
};
