import { useApiCalled } from "Context/ApiCalledContext";

import { ApiData } from "./pages/ApiData/Index";
import { Index } from "./pages/Index/Index";

export const Controller = () => {
  const { apiCalled } = useApiCalled();

  return apiCalled ? <ApiData /> : <Index />;
};
