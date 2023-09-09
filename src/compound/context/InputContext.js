import { createContext, useContext } from 'react'

const InputContext = createContext(null);

export function useInputContext() {
  const context = useContext(InputContext);
  if (!context) throw new Error("Hook 'useInputContext' can only be used within Input component")

  return context;
}

export default InputContext;