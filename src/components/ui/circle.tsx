import { Leaf } from "lucide-react"

export default function CircleLogo() {
  return (
    <div className="logo-circle">
      <div className="logo-center flex items-center justify-center bg-pure rounded-full w-[70px] h-[70px] shadow-lg p-1 ">
        <Leaf className=" w-8 h-8 text dark:filter dark:brightness-0 dark:invert" src="./loghi/lw-ita.png" alt="" />
      </div>
      {/* <div className="logo-center flex items-center bg-pure rounded-full w-[70px] h-[70px] shadow-lg p-1 ">
        <img className="dark:filter dark:brightness-0 dark:invert" src="./loghi/lw-ita.png" alt="" />
      </div> */}
      <div className="logo1 bg-pure rounded-full w-[70px] h-[70px] shadow-lg p-1">
        <img
          className="filter brightness-0 dark:invert"
          src="./loghi/units-small.png"
          alt=""
        />
      </div>
      <div className="logo2 bg-pure rounded-full w-[70px] h-[70px] shadow-lg p-1">
        <img
          className="filter brightness-0 dark:invert"
          src="./loghi/lw-ita.png"
          alt=""
        />
      </div>
      <div className="logo3 bg-pure rounded-full w-[70px] h-[70px] shadow-lg p-1">
        <img
          className="filter brightness-0 dark:invert"
          src="./loghi/units-small.png"
          alt=""
        />
      </div>
    </div>
  );
}
