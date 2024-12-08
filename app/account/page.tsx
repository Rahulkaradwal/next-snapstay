import { FC, ReactElement } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
};

const Page: FC = (): ReactElement => {
  return (
    <div className="mt-8">
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome Rahul Karadwal{" "}
      </h2>
    </div>
  );
};

export default Page;
