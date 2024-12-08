import React, { ReactElement } from "react";
import SideNavigation from "../_components/side-navigation";

type layoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<layoutProps> = ({ children }): ReactElement => {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
};

export default layout;
