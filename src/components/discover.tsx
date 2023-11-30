// a component that uses tailwind with a structure of a grid of 6 columns and 3 rows

// import * as React from "react";

// import { cn } from "@/lib/utils";


export default function Grid() {
  return (
    
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 h-[30rem] border border-input rounded-md flex items-center justify-center"> Ciao</div>
      <div className="col-span-2 h-[30rem] border border-input rounded-md flex items-center justify-center"> Ciao</div>
      
      <div className="col-span-2 h-[30rem] border border-input rounded-md flex items-center justify-center"> Ciao</div>
      <div className="col-span-1 h-[30rem] border border-input rounded-md flex items-center justify-center"> Ciao</div>
      <div className="col-span-1 h-[30rem] border border-input rounded-md flex items-center justify-center"> Ciao</div>
      <div className="col-span-2 h-[30rem] border border-input rounded-md flex items-center justify-center"> Ciao</div>
      </div>
      
      
    
  );
}