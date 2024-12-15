"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./Button";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams?.get("capacity") ?? "all";

  function handleClick(value: string): void {
    const params = new URLSearchParams(searchParams);

    params.set("capacity", value);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex justify-end">
      <div className="text-right flex  border   border-primary-800 w-fit mb-4">
        <Button
          handleClick={() => handleClick("all")}
          filter="all"
          activeFilter={activeFilter}
        >
          All
        </Button>
        <Button
          handleClick={() => handleClick("small")}
          filter="small"
          activeFilter={activeFilter}
        >
          1-4 Guests
        </Button>
        <Button
          handleClick={() => handleClick("medium")}
          filter="medium"
          activeFilter={activeFilter}
        >
          5-8 Guests
        </Button>
        <Button
          handleClick={() => handleClick("large")}
          filter="large"
          activeFilter={activeFilter}
        >
          8+ Guests
        </Button>
      </div>
    </div>
  );
}

export default Filter;
