// a component that uses tailwind with a structure of a grid of 6 columns and 3 rows

import CircleLogo from "./ui/circle";

// import * as React from "react";

// import { cn } from "@/lib/utils";

export default function DiscoverSection() {
  return (
    <div className="grid grid-cols-[500px,_1fr]">
      <div className=" p-12 relative flex justify-center items-center h-[600px]">
        <CircleLogo />
      </div>
      <div></div>
    </div>
  );
}
