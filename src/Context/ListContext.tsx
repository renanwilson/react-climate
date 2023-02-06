import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type typeArray = {
  location: string;
  id: string;
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
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("list") || "[]");
    if (item) {
      setList(item);
    }
  }, [setList]);
  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};
