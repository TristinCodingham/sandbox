import { TYPES } from "../hooks/useType";
import getType from "./getType";

export default function hasNoValue(value) {
  if (value === null || value === undefined) return true;
  switch (getType(value)) {
    case TYPES.ARRAY:
      return value.length === 0;
    case TYPES.OBJECT:
      return Object.values(value).length === 0;
    case TYPES.BIGINT:
      return isNaN(value);
    case TYPES.NUMBER:
      return isNaN(value);
    case TYPES.STRING:
      return !value;
    default:
      break;
  }
  return;
}
