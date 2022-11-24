import { useAppcontext } from "../Context/AppContext";

import { ApiData } from "./pages/ApiData/Index";
import { Index } from "./pages/Index/Index";

export default function Controller() {
  const { apiCalled } = useAppcontext();

  return apiCalled ? <ApiData /> : <Index />;
}
