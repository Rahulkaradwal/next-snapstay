"use server";
import { getCabins } from "../services/ApiRequests";
import { Cabin, CabinResponse } from "../services/Types";
import { CabinCard } from "./cabin-card";

async function CabinItem(): Promise<React.ReactNode> {
  const data: CabinResponse = await getCabins();
  const cabins = data.data;

  if (!cabins.length) return <p>No cabins found</p>;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin: Cabin) => (
        <CabinCard cabin={cabin} key={cabin._id} />
      ))}
    </div>
  );
}

export default CabinItem;
