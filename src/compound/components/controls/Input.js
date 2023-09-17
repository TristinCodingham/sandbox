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

function Label({ children, className = undefined }) {
  const classNames = ["label", className];

  return Children.map(children, (child) =>
    cloneElement(child, {
      className: [...classNames, child?.props?.className]
        .filter((c) => c !== undefined)
        .join(" "),
    })
  );
}

function Container({ children, className = undefined }) {
  const classNames = ["container", className];
  return (
    <div className={classNames.filter((c) => c !== undefined).join(" ")}>
      {children}
    </div>
  );
}

function Prefixes({ children, className = undefined }) {
  const classNames = ["prefixes", className];
  return (
    <div className={classNames.filter((c) => c !== undefined).join(" ")}>
      {children}
    </div>
  );
}

function Prefix({ children, className = undefined }) {
  const classNames = ["prefix", className];
  return Children.map(children, (child) =>
    cloneElement(child, {
      className: [...classNames, child?.props?.className]
        .filter((c) => c !== undefined)
        .join(" "),
    })
  );
}

function Control({ children, className = undefined }) {
  const classNames = ["control", className];
  const inputProps = useInputContext();

  return Children.map(children, (child) =>
    cloneElement(child, {
      ...inputProps,
      className: [...classNames, child?.props?.className]
        .filter((c) => c !== undefined)
        .join(" "),
    })
  );
}

function Suffixes({ children, className = undefined }) {
  const classNames = ["suffixes", className];
  return (
    <div className={classNames.filter((c) => c !== undefined).join(" ")}>
      {children}
    </div>
  );
}

function Suffix({ children, className = undefined }) {
  const classNames = ["suffix", className];
  return Children.map(children, (child) =>
    cloneElement(child, {
      className: [...classNames, child?.props?.className]
        .filter((c) => c !== undefined)
        .join(" "),
    })
  );
}

function Output({ children, className = undefined }) {
  const classNames = ["output", className];
  return Children.map(children, (child) =>
    cloneElement(child, {
      className: [...classNames, child?.props?.className]
        .filter((c) => c !== undefined)
        .join(" "),
    })
  );
}

const Input = {
  Form,
  Group,
  Container,
  Label,
  Prefixes,
  Prefix,
  Control,
  Suffixes,
  Suffix,
  Output,
};

export default Input;
