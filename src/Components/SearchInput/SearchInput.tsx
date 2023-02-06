import { IconButton, InputAdornment } from "@mui/material";
import { useRequestsWeatherApi } from "utils/RequestsWeatherApi";
import { useLocationContext } from "Context/LocationContext";
import { InputColor, SearchIcon } from "./styles";

export function SearchInput() {
  const { handleInput } = useRequestsWeatherApi();
  const { setLocation } = useLocationContext();
  return (
    <InputColor
      endAdornment={
        <InputAdornment position="end">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
      onKeyDown={handleInput}
      onChange={(e) => setLocation(e.target.value)}
      color="primary"
    />
  );
}
