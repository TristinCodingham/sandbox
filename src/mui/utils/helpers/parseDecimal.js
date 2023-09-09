export default function parseDecimal(value, precision) {
  // ParseFloat first otherwise throws error if value is undefined, eg: undefined?.toFixed(2) -> error
  const number = parseFloat(value) || 0;
  return parseFloat(number?.toFixed(precision || 2)) || 0;
}
