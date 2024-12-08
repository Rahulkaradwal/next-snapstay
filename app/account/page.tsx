import { FC, ReactElement } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
};

const Page: FC = (): ReactElement => {
  return (
    <div>
      <h1>Account</h1>
    </div>
  );
};

export default Page;
