import { ControllerWithAllContext } from "./Components/Controller";
import { Allcontext } from "./HOC/AllContextProvider";
import "./index.css";

export const App = (): JSX.Element => Allcontext(ControllerWithAllContext);
