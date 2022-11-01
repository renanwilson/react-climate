import { createContext, useState } from "react";

const INITIAL_STATE = {
  apiCalled: false,
};

export const AppContext = createContext(INITIAL_STATE);

export const UseAppContext = () => {
  const [apiCalled, setApiCalled] = useState(false);
  
};
