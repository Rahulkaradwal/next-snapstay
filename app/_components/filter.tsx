"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ButtonStyles = "px-8 py-3 hover:bg-primary-800";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  function handleClick(value: string): void {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", value);
    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className="flex justify-end">
      <div className="text-right flex  border   border-primary-800 w-fit mb-4">
        <button
          onClick={() => {
            handleClick("all");
          }}
          className={ButtonStyles}
        >
          All
        </button>
        <button
          onClick={() => {
            handleClick("small");
          }}
          className={ButtonStyles}
        >
          Small
        </button>
        <button
          onClick={() => {
            handleClick("medium");
          }}
          className={ButtonStyles}
        >
          Medium
        </button>
        <button
          onClick={() => {
            handleClick("large");
          }}
          className={ButtonStyles}
        >
          Large
        </button>
      </div>
    </div>
  );
}

export default Filter;
