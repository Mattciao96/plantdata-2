import { Leaf } from "lucide-react"

export default function CircleLogo() {
  return (
    <div className="circle-perimeter">
      <div className="pulse animate-ping"></div>
      <div className="logo-center pulsating-circle flex items-center justify-center bg-pure rounded-full w-[70px] h-[70px] shadow-lg p-1 ">
        <Leaf className=" w-8 h-8 text dark:filter dark:brightness-0 dark:invert"/>
      </div>
      {/* <div className="logo-center flex items-center bg-pure rounded-full w-[70px] h-[70px] shadow-lg p-1 ">
        <img className="dark:filter dark:brightness-0 dark:invert" src="./loghi/lw-ita.png" alt="" />
      </div> */}
      <div className="perimeter-logo logo-pos-1 bg-pure rounded-full w-[80px] h-[80px] shadow-lg p-1">
        <img
          className="filter brightness-0 dark:invert"
          src="./loghi/units-small.png"
          alt=""
        />
      </div>
      <div className="perimeter-logo logo-pos-2 bg-pure rounded-full w-[80px] h-[80px] shadow-lg p-1">
        <img
          className="dark:filter dark:brightness-0 dark:invert"
          src="./loghi/lw-ita.png"
          alt=""
        />
      </div>
      <div className="perimeter-logo logo-pos-3 bg-pure rounded-full w-[80px] h-[80px] shadow-lg p-1">
        <img
          className="dark:filter dark:brightness-0 dark:invert"
          src="./loghi/unibo-small.png"
          alt=""
        />
      </div>
      <div className="perimeter-logo logo-pos-4 bg-pure rounded-full w-[80px] h-[80px] shadow-lg p-1">
        <img
          className="filter brightness-0 dark:invert"
          src="./loghi/units-small.png"
          alt=""
        />
      </div>
    </div>
  );
}
