import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";

type ApiCalledProps = {
  apiCalled: boolean;
  setApiCalled: React.Dispatch<React.SetStateAction<boolean>>;
};
type ApiCalledProviderProps = {
  children: ReactElement;
};
const INITIAL_STATE: ApiCalledProps = {
  apiCalled: false,
  setApiCalled: () => {},
};

export const ApiCalledContext = createContext<ApiCalledProps>(INITIAL_STATE);

export const useApiCalled = () => useContext(ApiCalledContext);

export const ApiCalledProvider = ({ children }: ApiCalledProviderProps) => {
  const [apiCalled, setApiCalled] = useState(false);

  return (
    <ApiCalledContext.Provider value={{ apiCalled, setApiCalled }}>
      {children}
    </ApiCalledContext.Provider>
  );
};
