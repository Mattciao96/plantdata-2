// a component that uses tailwind with a structure of a grid of 6 columns and 3 rows

// import * as React from "react";

// import { cn } from "@/lib/utils";


export default function Grid() {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-2 bg-amber-400 rounded-sm"> Ciao</div>
      <div className="col-span-4"> Ciaoo</div>
      <div className="col-span-4"> Ciao</div>
      <div className="col-span-2"> Ciaoo</div>
      <div className="col-span-2"> Ciao</div>
      <div className="col-span-4"> Ciaoo</div>
      {/* <div className="bg-red-500">1</div>
      <div className="bg-red-500">2</div>
      <div className="bg-red-500">3</div>
      <div className="bg-red-500">4</div>
      <div className="bg-red-500">5</div>
      <div className="bg-red-500">6</div>
      <div className="bg-red-500">1</div>
      <div className="bg-red-500">2</div>
      <div className="bg-red-500">3</div>
      <div className="bg-red-500">4</div>
      <div className="bg-red-500">5</div>
      <div className="bg-red-500">6</div>
      <div className="bg-red-500">1</div>
      <div className="bg-red-500">2</div>
      <div className="bg-red-500">3</div>
      <div className="bg-red-500">4</div>
      <div className="bg-red-500">5</div>
      <div className="bg-red-500">6</div> */}
    </div>
  );
}