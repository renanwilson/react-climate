import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import { Input } from "@mui/material";

export const SearchIcon = styled(AiOutlineSearch)`
  color: #ffff;
  margin: 10px;
`;
export const InputColor = styled(Input)`
  color: white !important;
  @media (max-width: 1000px) {
    color: #000 !important;
  }
`;
