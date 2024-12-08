import { FC, ReactElement } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const Page: FC = (): ReactElement => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default Page;
