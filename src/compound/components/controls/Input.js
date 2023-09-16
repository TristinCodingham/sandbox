import { Children, cloneElement } from "react";
import InputContext, { useInputContext } from "../../context/InputContext";
import "./input.css";

function Form({ children, ...restProps }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      onInvalid={(e) => e.preventDefault()}
      {...restProps}
    >
      {children}
    </form>
  );
}

function Group({ children, ...restProps }) {
  return (
    <InputContext.Provider value={restProps}>{children}</InputContext.Provider>
  );
}

function Label({ children, className = "" }) {
  className = "label " + className;
  return Children.map(children, (child) =>
    cloneElement(child, {
      className: `${className} ${child?.props?.className || ""}`,
    })
  );
}

function Container({ children, className = "" }) {
  className = "container " + className;
  return <div className={className}>{children}</div>;
}

function Prefix({ children, className = "" }) {
  className = "prefix " + className;
  return Children.map(children, (child) =>
    cloneElement(child, {
      className: `${className} ${child?.props?.className || ""}`,
    })
  );
}

function Control({ children, className = "" }) {
  className = "control " + className;
  const inputProps = useInputContext();

  return Children.map(children, (child) =>
    cloneElement(child, {
      ...inputProps,
      className: `${className} ${child?.props?.className || ""}`,
    })
  );
}

function Suffix({ children, className = "" }) {
  className = "suffix " + className;
  return Children.map(children, (child) =>
    cloneElement(child, {
      className: `${className} ${child?.props?.className || ""}`,
    })
  );
}

function Output({ children, className = "" }) {
  className = "output " + className;
  return Children.map(children, (child) =>
    cloneElement(child, {
      className: `${className} ${child?.props?.className || ""}`,
    })
  );
}

const Input = {
  Form,
  Group,
  Container,
  Label,
  Prefix,
  Control,
  Suffix,
  Output,
};

export default Input;
