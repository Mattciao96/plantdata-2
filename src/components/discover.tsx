// a component that uses tailwind with a structure of a grid of 6 columns and 3 rows

import { Button } from "./ui/button";
import CircleLogo from "./ui/circle";

// import * as React from "react";

// import { cn } from "@/lib/utils";

export default function DiscoverSection() {
  return (
    <>
      <div className="min-w-full flex justify-start items-center gap-4">
        <div className=" p-12 relative flex justify-center items-center ">
          <CircleLogo />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl">Lorem title</h3>
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            mollitia reiciendis rem molestias. Quod iusto amet minima sapiente
            nisi quidem vero? Fuga similique fugiat labore cupiditate voluptas
            sapiente explicabo sed.
          </p>
          <div className="flex justify-center md:justify-start  py-2">
            <Button>Scopri</Button>
          </div>
        </div>
      </div>
    </>
  );
}
