import { Leaf } from "lucide-react";

export default function CircleLogo() {
  return (
    <div className="circle-perimeter">
      <div className="pulse animate-ping"></div>
      <div className="logo-center pulsating-circle flex items-center justify-center bg-pure dark:bg-secondary rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px] shadow-lg dark:shadow-muted p-1 ">
        <Leaf className=" w-8 h-8 text dark:filter dark:brightness-0 dark:invert" />
      </div>
      {/* <div className="logo-center flex items-center bg-pure rounded-full w-[70px] h-[70px] shadow-lg p-1 ">
        <img className="dark:filter dark:brightness-0 dark:invert" src="./images/loghi/lw-ita.png" alt="" />
      </div> */}
      <div className="perimeter-logo logo-pos-0 bg-pure dark:bg-secondary rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px] shadow-lg dark:shadow-muted p-1">
        <img
          className="dark:filter dark:brightness-0 dark:invert"
          src="./images/loghi/sapienza.png"
          alt=""
        />
      </div>
      <div className="perimeter-logo logo-pos-1 bg-pure dark:bg-secondary rounded-full  w-[60px] h-[60px] md:w-[80px] md:h-[80px] shadow-lg dark:shadow-muted p-1">
        <img
          className="filter brightness-0 dark:invert"
          src="./images/loghi/units-small.png"
          alt=""
        />
      </div>
      <div className="perimeter-logo logo-pos-2 bg-pure dark:bg-secondary rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px] shadow-lg dark:shadow-muted p-1">
        <img
          className="dark:filter dark:brightness-0 dark:invert"
          src="./images/loghi/unibo-small.png"
          alt=""
        />
      </div>
      <div className="perimeter-logo logo-pos-3 bg-pure dark:bg-secondary rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px] shadow-lg dark:shadow-muted p-1">
        <img
          className="dark:filter dark:brightness-0 dark:invert"
          src="./images/loghi/lw-ita.png"
          alt=""
        />
      </div>
      
      <div className="perimeter-logo logo-pos-4 bg-pure dark:bg-secondary rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px] shadow-lg dark:shadow-muted p-1">
        <img
          className="dark:filter dark:brightness-0 dark:invert"
          src="./images/loghi/pisa.png"
          alt=""
        />
      </div>
      <div className="perimeter-logo logo-pos-5 bg-pure dark:bg-secondary rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px] shadow-lg dark:shadow-muted p-1">
        <img
          className="dark:filter dark:brightness-0 dark:invert"
          src="./images/loghi/perugia.png"
          alt=""
        />
      </div>
      <div className="perimeter-logo logo-pos-6 bg-pure dark:bg-secondary rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px] shadow-lg dark:shadow-muted p-1">
        <img
          className="dark:filter dark:brightness-0 dark:invert max-w-[90%] mt-2"
          src="./images/loghi/camerino2.png"
          alt=""
        />
      </div>
    </div>
  );
}
