import { Metadata } from "next";
import { CabinCard } from "../_components/cabin-card";
import { Cabin, CabinResponse } from "../services/Types";
import { getCabins } from "../services/ApiRequests";

export const metadata: Metadata = {
  title: "Cabins",
};

const Page = async () => {
  const data: CabinResponse = await getCabins();
  const cabins = data.data;

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin: Cabin) => (
            <CabinCard cabin={cabin} key={cabin._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
