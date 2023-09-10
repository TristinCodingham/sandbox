import { Children, cloneElement } from "react";
import InputContext, {
  useInputContext,
} from "../compound/context/InputContext";
import "./input.css";

function Group({
  parent = (children) => (
    <InputContext.Provider value={restProps}>
      <form>{children}</form>
    </InputContext.Provider>
  ),
  children,
  ...restProps
}) {
  return parent(children);
}

function Label({ children, className = "" }) {
  const { label } = useInputContext();

  return label;
}

function Container({ children, className = "" }) {
  className = className + " container";
  return Children.map(children, (child) =>
    cloneElement(child, {
      className: `${className} ${child?.props?.className}`,
    })
  );
}

function Prefix({ children, className = "" }) {
  className = className + " prefix";
  return Children.map(children, (child) =>
    cloneElement(child, {
      className: `${className} ${child?.props?.className}`,
    })
  );
}

function Control({ children, className = "" }) {
  className = className + " control";
  const inputProps = useInputContext();

  return Children.map(children, (child) =>
    cloneElement(child, {
      ...inputProps,
      className: `${className} ${child?.props?.className}`,
    })
  );
}

function Suffix({ children, className = "" }) {
  className = className + " suffix";
  return Children.map(children, (child) =>
    cloneElement(child, {
      className: `${className} ${child?.props?.className}`,
    })
  );
}

const Input = {
  Group,
  Label,
  Container,
  Prefix,
  Control,
  Suffix,
};

export default Input;
