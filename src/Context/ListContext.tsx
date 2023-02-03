import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

type typeArray = {
  location: string;
};
type ListContextProps = {
  list: typeArray[];
  setList: Dispatch<SetStateAction<typeArray[]>>;
};
const INITIAL_STATE: ListContextProps = {
  list: [],
  setList: () => [],
};
type ListContextProviderProps = {
  children: ReactElement;
};
export const ListContext = createContext(INITIAL_STATE);
export const useListContext = () => useContext(ListContext);

export const ListContextProvider = ({ children }: ListContextProviderProps) => {
  const [list, setList] = useState<typeArray[]>([]);
  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};
