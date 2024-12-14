"use server";
import { getCabins } from "../services/ApiRequests";
import { Cabin, CabinResponse } from "../services/Types";
import { CabinCard } from "./cabin-card";

type Props = {
  filter: string;
};

async function CabinItem({ filter }: Props): Promise<React.ReactNode> {
  const data: CabinResponse = await getCabins();
  const cabins = data.data;

  let displayCabin: Cabin[] = [];

  if (filter === "all") {
    displayCabin = cabins;
  }

  if (filter === "small") {
    displayCabin = cabins.filter((cabin: Cabin) => cabin.maxCapacity <= 4);
  }

  if (filter === "medium") {
    displayCabin = cabins.filter(
      (cabin: Cabin) => cabin.maxCapacity > 4 && cabin.maxCapacity <= 8
    );
  }

  if (filter === "large") {
    displayCabin = cabins.filter((cabin: Cabin) => cabin.maxCapacity > 8);
  }
  if (!displayCabin.length) return <p>No cabins found</p>;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayCabin.map((cabin: Cabin) => (
        <CabinCard cabin={cabin} key={cabin._id} />
      ))}
    </div>
  );
}

export default CabinItem;
