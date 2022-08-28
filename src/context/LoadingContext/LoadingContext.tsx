import { ReactNode, useContext, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";

type LoadingContextProps = {
  children: ReactNode;
};

export type LoadingContextData = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingContext = createContext({} as LoadingContextData);

export const LoadingContextProvider = ({ children }: LoadingContextProps) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
