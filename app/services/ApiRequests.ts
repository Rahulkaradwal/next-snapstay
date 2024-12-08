import { CabinResponse } from "./Types";
import { URL } from "./URL";

export const getCabins = async (): Promise<CabinResponse> => {
  const res = await fetch(`${URL}/cabins`);
  return await res.json();
};
