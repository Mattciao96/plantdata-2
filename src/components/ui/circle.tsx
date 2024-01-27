import { Leaf } from "lucide-react";

export default function CircleLogo() {
  return (
    <div className="circle-perimeter">
      <div className="pulse animate-ping" />
      <div className="logo-center pulsating-circle flex h-[60px] w-[60px] items-center justify-center rounded-full bg-pure p-1 shadow-lg dark:bg-secondary dark:shadow-muted md:h-[80px] md:w-[80px] ">
        <Leaf className=" text h-8 w-8 dark:brightness-0 dark:invert dark:filter" />
      </div>
      {/* <div className="logo-center flex items-center bg-pure rounded-full w-[70px] h-[70px] shadow-lg p-1 ">
        <img className="dark:filter dark:brightness-0 dark:invert" src="./images/loghi/lw-ita.png" alt="" />
      </div> */}
      <div className="perimeter-logo logo-pos-0 h-[60px] w-[60px] rounded-full bg-pure p-1 shadow-lg dark:bg-secondary dark:shadow-muted md:h-[80px] md:w-[80px]">
        <img
          className="dark:brightness-0 dark:invert dark:filter"
          src="./images/loghi/sapienza.png"
          alt=""
        />
      </div>
      <div className="perimeter-logo logo-pos-1 h-[60px] w-[60px] rounded-full  bg-pure p-1 shadow-lg dark:bg-secondary dark:shadow-muted md:h-[80px] md:w-[80px]">
        <img
          className="brightness-0 filter dark:invert"
          src="./images/loghi/units-small.png"
          alt=""
        />
      </div>
      <div className="perimeter-logo logo-pos-2 h-[60px] w-[60px] rounded-full bg-pure p-1 shadow-lg dark:bg-secondary dark:shadow-muted md:h-[80px] md:w-[80px]">
        <img
          className="dark:brightness-0 dark:invert dark:filter"
          src="./images/loghi/unibo-small.png"
          alt=""
        />
      </div>
      <div className="perimeter-logo logo-pos-3 h-[60px] w-[60px] rounded-full bg-pure p-1 shadow-lg dark:bg-secondary dark:shadow-muted md:h-[80px] md:w-[80px]">
        <img
          className="dark:brightness-0 dark:invert dark:filter"
          src="./images/loghi/lw-ita.png"
          alt=""
        />
      </div>

      <div className="perimeter-logo logo-pos-4 h-[60px] w-[60px] rounded-full bg-pure p-1 shadow-lg dark:bg-secondary dark:shadow-muted md:h-[80px] md:w-[80px]">
        <img
          className="dark:brightness-0 dark:invert dark:filter"
          src="./images/loghi/pisa.png"
          alt=""
        />
      </div>
      <div className="perimeter-logo logo-pos-5 h-[60px] w-[60px] rounded-full bg-pure p-1 shadow-lg dark:bg-secondary dark:shadow-muted md:h-[80px] md:w-[80px]">
        <img
          className="dark:brightness-0 dark:invert dark:filter"
          src="./images/loghi/perugia.png"
          alt=""
        />
      </div>
      <div className="perimeter-logo logo-pos-6 h-[60px] w-[60px] rounded-full bg-pure p-1 shadow-lg dark:bg-secondary dark:shadow-muted md:h-[80px] md:w-[80px]">
        <img
          className="mt-2 max-w-[90%] dark:brightness-0 dark:invert dark:filter"
          src="./images/loghi/camerino2.png"
          alt=""
        />
      </div>
    </div>
  );
}
