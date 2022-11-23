import { useAppcontext } from "../Context/AppContext";

import { ApiData } from "./pages/ApiData/Index";
import { Index } from "./pages/Index";

export default function Controller() {
  const { apiCalled } = useAppcontext();
  console.log(apiCalled);
  return <>{apiCalled === 0 ? <Index /> : <ApiData />}</>;
}
