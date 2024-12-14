import { Metadata } from "next";
import { Suspense } from "react";
import CabinItem from "../_components/cabin-item";
import SpinnerMini from "../_components/spinner-mini";
import Filter from "../_components/filter";

export const metadata: Metadata = {
  title: "Cabins",
};
// export const revalidate = 0;

const Page = () => {
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
        Welcome to paradise.ß
      </p>
      <Filter />
      <Suspense fallback={<SpinnerMini />}>
        {/* @ts-expect-error Server Component */}
        <CabinItem />
      </Suspense>
    </div>
  );
};

export default Page;
