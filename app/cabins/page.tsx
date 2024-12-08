import { FC, ReactElement } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cabins",
};

const Page: FC = (): ReactElement => {
  return (
    <div>
      <h1>cabins</h1>
    </div>
  );
};

export default Page;
