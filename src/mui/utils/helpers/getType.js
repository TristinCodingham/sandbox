export default function getType(val) {
  return {}.toString
    .call(val)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}
