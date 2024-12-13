import { notFound } from "next/navigation";
import { CabinResponse, Response } from "./Types";
import { URL } from "./URL";

export const getCabins = async (): Promise<CabinResponse> => {
  const res = await fetch(`${URL}/cabins`);
  return await res.json();
};

export const getCabin = async (id: string): Promise<Response> => {
  try {
    const res = await fetch(`${URL}/cabins/${id}`);
    return await res.json();
  } catch {
    notFound();
  }
};
