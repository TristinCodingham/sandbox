export default function convertValueToCurrency(value, locale = "en-ZA", options = { currency: "zar", style: "currency" }) {
  return new Intl.NumberFormat(locale, options).format(value);
}