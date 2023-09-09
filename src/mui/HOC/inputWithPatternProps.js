export const inputWithPatternProps = (WrappedComponent) => (props) => {
  const containerProps = {
    ...props?.containerProps
  }
  const inputProps = {
    ...props?.inputProps
  }
  const newProps = {
    ...props,
    setValue: (e) => {
      const pattern = props?.pattern;
      const value = e.target.value;
      console.log('value', value);
      const isValid = pattern.test(value);
      console.log('isValid', isValid);
      if (!isValid) return;
      props?.setValue(value);
    },
    inputProps,
    containerProps
  }

  return (
    <WrappedComponent {...newProps} />
  )
}