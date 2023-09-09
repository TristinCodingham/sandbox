import parseDecimal from "./parseDecimal";

export default function removeCurrencyFormat(value) {
  if (value === null || value === undefined) return 0;
  if (!isNaN(value)) return parseDecimal(value);

  const newValue = parseDecimal(value?.replaceAll(/[R, ]/g, ""));
  return newValue;
}