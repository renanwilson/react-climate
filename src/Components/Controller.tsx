import { useApiCalled } from "Context/ApiCalledContext";
import { Allcontext } from "HOC/AllContextProvider";

import { ApiData } from "./pages/ApiData/Index";
import { Index } from "./pages/Index/Index";

const Controller = () => {
  const { apiCalled } = useApiCalled();

  return apiCalled ? <ApiData /> : <Index />;
};
export const ControllerWithAllContext = () => Allcontext(Controller);
