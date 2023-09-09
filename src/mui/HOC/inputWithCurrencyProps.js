import convertValueToCurrency from "../utils/helpers/convertValueToCurrency"

export const inputWithCurrencyProps = (WrappedComponent) => (props) => {
  const containerProps = {
    ...props?.containerProps
  }
  const inputProps = {
    ...props?.inputProps,
  }
  const newProps = {
    ...props,
    setValue: (e) => {
      const value = e.target.value;
      if (value === null || value === undefined || !isNaN(value)) return props?.setValue(convertValueToCurrency(value));
      console.log('value', value);
      const valueSplit = value?.split(",");
      console.log('valueSplit', valueSplit);
      const wholeNumber = valueSplit[0]?.replaceAll(/[R\s]/g, "");
      console.log('wholeNumber', wholeNumber);
      const decimal = valueSplit[1];
      console.log('decimal', decimal);
      const newValue = `${wholeNumber}.${decimal}`;
      console.log('newValue', newValue);
      const currency = convertValueToCurrency(newValue);
      console.log('currency', currency);

      props?.setValue(currency);
    },
    inputProps,
    containerProps
  }

  return (
    <WrappedComponent {...newProps} />
  )
}