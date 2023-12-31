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
      <div className="min-w-full flex flex-col md:flex-row justify-evenly items-center gap-4 my-32">
        <div className=" p-12 relative flex justify-center items-center ">
          <CircleLogo />
        </div>
        <div
          className="flex flex-col max-w-[500px] gap-4 md:gap-2 -mt-[100px] md:mt-0"
  
        >
          <h3 className="text-4xl text-center md:text-left">Lorem title</h3>
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
      {/* SECTION 2 */}
      <div className="min-w-full flex flex-col-reverse md:flex-row justify-evenly items-center gap-4 my-32">
        
        <div
          className="flex flex-col max-w-[500px] gap-4 md:gap-2 -mt-[100px] md:mt-0"
         
        >
          <h3 className="text-4xl text-center md:text-left">Lorem title</h3>
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
        <div className=" gap-8 relative flex justify-center items-center ">
          <ImageScrollFixed />
        </div>
      </div>
      {/* SECTION 3 */}
      <div className="min-w-full flex flex-col md:flex-row justify-evenly items-center gap-4 md:my-60 mb-40">
        <div className="p-0 md:p-12 relative flex justify-center items-center ">
          <Globe className="w-[100px] h-[100px] text-[#3ecf8e] dark:text-[#3ecf8e]"/>
        </div>
        <div
          className="flex flex-col max-w-[500px] gap-4 md:gap-2 "
        
        >
          <h3 className="text-4xl text-center md:text-left">Lorem title</h3>
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            mollitia reiciendis rem molestias. Quod iusto amet minima sapiente
            nisi quidem vero? Fuga similique fugiat labore cupiditate voluptas
            sapiente explicabo sed.
          </p>
          <div className="flex justify-center md:justify-start py-2">
            <Button>Scopri</Button>
          </div>
        </div>
      </div>
    </>
  );
}
