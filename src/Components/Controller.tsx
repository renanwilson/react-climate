import { useApiCalled } from "../Context/ApiCalledContext";

import { ApiData } from "./pages/ApiData/Index";
import { Index } from "./pages/Index/Index";

export default function Controller() {
  const { apiCalled } = useApiCalled();

  return apiCalled ? <ApiData /> : <Index />;
}
