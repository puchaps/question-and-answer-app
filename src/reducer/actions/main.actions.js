import { TOGGELE_INFO } from "../types/main.types";

export const toggleInfoAC = (choosedItemId) => ({
  type: TOGGELE_INFO,
  payload: choosedItemId
});