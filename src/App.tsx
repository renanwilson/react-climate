import Controller from "./Components/Controller";
import { AppContextProvider } from "./Context/AppContext";
import "./index.css";

export default function App() {
  return (
    <AppContextProvider>
      <Controller />
    </AppContextProvider>
  );
}
