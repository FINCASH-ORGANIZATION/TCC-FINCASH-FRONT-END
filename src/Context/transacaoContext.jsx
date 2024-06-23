import { createContext, useState } from "react";

export const TransacaoContext = createContext();

export function TransacaoProvider({ children }) {
  const [transacao, setTransacao] = useState({});

  return (
    <TransacaoContext.Provider value={{ transacao, setTransacao }}>
      {children}
    </TransacaoContext.Provider>
  );
}
