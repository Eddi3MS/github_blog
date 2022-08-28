import { ReactNode, useCallback, useContext, useState } from "react";
import { createContext } from "use-context-selector";
import { IError } from "../../errors/IError";

export interface ICreateContext {
  error: IError | null;
  setErrorModal: (error: IError | null) => void;
}

interface IErrorModalContextProvider {
  children: ReactNode;
}

export const ErrorModalContext = createContext<ICreateContext>(
  {} as ICreateContext
);

export const ErrorModalContextProvider = ({
  children,
}: IErrorModalContextProvider) => {
  const [error, setError] = useState<IError | null>(null);

  const setErrorModal = useCallback((error: IError | null) => {
    setError(error);
  }, []);

  return (
    <ErrorModalContext.Provider value={{ error, setErrorModal }}>
      {children}
    </ErrorModalContext.Provider>
  );
};
