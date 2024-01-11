// a component that uses tailwind with a structure of a grid of 6 columns and 3 rows

import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import CircleLogo from "./ui/circle";

import ImageScrollFixed from "./ui/image-slide-fixed";

// import * as React from "react";

// import { cn } from "@/lib/utils";

export default function DiscoverSection() {
  return (
    <>
      {/* SECTION 1 */}
      <div className="my-32 flex min-w-full flex-col items-center justify-evenly gap-4 md:mt-56 md:flex-row">
        <div className=" relative flex items-center justify-center p-12 ">
          <CircleLogo />
        </div>
        <div className="-mt-[100px] flex max-w-[500px] flex-col gap-4 md:mt-0 md:gap-2">
          <h3 className="text-center text-4xl md:text-left">Lorem title</h3>
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            mollitia reiciendis rem molestias. Quod iusto amet minima sapiente
            nisi quidem vero? Fuga similique fugiat labore cupiditate voluptas
            sapiente explicabo sedo.
          </p>
          <div className="flex justify-center py-2  md:justify-start">
            <Button>Scopri</Button>
          </div>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="my-32 flex min-w-full flex-col-reverse items-center justify-evenly gap-4 md:flex-row">
        <div className="-mt-[100px] flex max-w-[500px] flex-col gap-4 md:mt-0 md:gap-2">
          <h3 className="text-center text-4xl md:text-left">Lorem title</h3>
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            mollitia reiciendis rem molestias. Quod iusto amet minima sapiente
            nisi quidem vero? Fuga similique fugiat labore cupiditate voluptas
            sapiente explicabo sed.
          </p>
          <div className="flex justify-center py-2  md:justify-start">
            <Button>Scopri</Button>
          </div>
        </div>
        <div className=" relative flex items-center justify-center gap-8 ">
          <ImageScrollFixed />
        </div>
      </div>
      {/* SECTION 3 */}
      <div className="mb-40 flex min-w-full flex-col items-center justify-evenly gap-4 md:my-60 md:flex-row">
        <div className="relative flex items-center justify-center p-0 md:p-12 ">
          <Globe className="h-[100px] w-[100px] text-[#3ecf8e] dark:text-[#3ecf8e]" />
        </div>
        <div className="flex max-w-[500px] flex-col gap-4 md:gap-2 ">
          <h3 className="text-center text-4xl md:text-left">Lorem title</h3>
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            mollitia reiciendis rem molestias. Quod iusto amet minima sapiente
            nisi quidem vero? Fuga similique fugiat labore cupiditate voluptas
            sapiente explicabo sed.
          </p>
          <div className="flex justify-center py-2 md:justify-start">
            <Button>Scopri</Button>
          </div>
        </div>
      </div>
    </>
  );
}
