import { useCallback, useEffect, useState } from "react";
import getType from "../helpers/getType";

export const TYPES = {
  BOOLEAN: "boolean",
  UNDEFINED: "undefined",
  NUMBER: "number",
  BIGINT: "bigint",
  STRING: "string",
  SYMBOL: "symbol",
  FILE: "file",
  FUNCTION: "function",
  DATE: "date",
  REGEX: "regexp",
  ARRAY: "array",
  OBJECT: "object",
  ERROR: "error",
};

/**
 * Only type checks in development mode
 * @param {String} type Defines the data type which the initial value and any changes to the value must honor
 * @param {Boolean | Undefined | Number | BigInt | String | Symbol | File | Function | Date | RegExp | Array | Object | Error} initValue Initial state value
 * @returns Array [value, setValue]
 * @throws TypeError
 */
export default function useType(type, initValue) {
  // Checks to see if the given value type matches the required value type
  const typeCheck = useCallback(
    (value) => {
      // TypeError message format
      const typeError = (val) =>
        new TypeError(
          `typeof ${getType(val)} does not match required type ${type}`
        );

      Object.values(TYPES).forEach((val) => {
        if (type.toLowerCase() !== val) return;
        if (getType(value) !== val) throw typeError(value);
      });
    },
    [type]
  );

  const isProductionMode = process.env.NODE_ENV === "production";
  // Type check the initial value
  useEffect(() => {
    if (initValue && !isProductionMode) typeCheck(initValue);
  }, [typeCheck, initValue, isProductionMode]);

  // Value state
  const [value, setValue] = useState(initValue);

  // Type check the new value
  const handleValueChange = useCallback(
    (val) => {
      // Only type check in development mode
      if (!isProductionMode) typeCheck(val); // If type check fails, throws TypeError, preventing next line from executing
      setValue(val);
    },
    [typeCheck, isProductionMode]
  );

  return [value, handleValueChange]; // State to be used
}
