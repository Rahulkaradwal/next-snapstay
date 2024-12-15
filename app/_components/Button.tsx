import { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  activeFilter: string;
  filter: string;
  handleClick: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  activeFilter,
  filter,
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`px-8 py-3 hover:bg-primary-800 ${
        activeFilter === filter ? "bg-primary-800" : ""
      }  `}
    >
      {children}
    </button>
  );
};
