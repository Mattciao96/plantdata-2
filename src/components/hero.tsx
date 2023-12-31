import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
export default function HeroSection() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex justify-evenly flex-col md:flex-row">
      <div className="mt-10 md:mt-20 text-justify md:text-left">
        {i18n.resolvedLanguage === "en" && (
          <h1 className="text-[#3ecf8e]  text-title font-medium text-center md:text-left">
            {t("home-title")}
          </h1>
        )}
        <h2 className=" text-title font-medium text-center md:text-left">
          {t("home-subtitle.part1")}
        </h2>
        <h2 className=" text-title font-medium text-center md:text-left">
          {t("home-subtitle.part2")}
        </h2>
        {i18n.resolvedLanguage === "it" && (
          <h1 className="text-[#3ecf8e]  text-title font-medium text-center md:text-left">
            {t("home-title")}
          </h1>
        )}
        <p className="pt-8 md:py-4 m-auto md:m-0 max-w-md text-justify md:text-left md:pl-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          repellendus sit quia commodi illum quod voluptatibus? Reprehenderit,
          odio consequatur. Magnam vero laudantium perferendis provident facilis
          aperiam omnis quam, fuga corporis!
        </p>
        <div className="flex justify-center md:justify-start md:pl-1 py-2">
          <Button>Risorse</Button>
        </div>
      </div>
      <div className="hidden md:mt-28 md:block w-full h-full max-h-[500px] max-w-[500px]">
        <img className="m-h-[inherit]" src="./images/leaves3.png" alt="" />
      </div>
      {/* <div className="relative py-32 md:min-w-[600px] md:h-[40rem] object-contain overflow-hidden flex justify-center">
        <img className="absolute -mt-[120px] w-[400px] h-auto -ml-[250px]" src="./images/planthero.png" alt="" />
        <div className="absolute mt-40 w-full pl-52">
          <div className="rounded-full">
            <div className="shadow-md flex px-4 gap-2 justify-start border-t border-l border-r border-input bg-muted rounded-t-[10px] min-h-[30px]">
              <div className="my-2 h-3 w-3  border rounded-full border-input"></div>

              <div className="my-2 h-3 w-3  border rounded-full border-input"></div>
              <div className="my-2 h-3 w-3  border rounded-full border-input"></div>
            </div>
            <div className="relative min-h-[300px] w-full bg-muted border-input z-10 border rounded-b-[10px] flex items-center">
              <div className="el relative w-[150px] h-[200px]">
                <img
                  src="./images/Frame.svg"
                  className="w-full absolute t-0 -z-10 overflow-hidden"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-4 w-40 justify-evenly items-center px-2 ">
                <p className="w-full h-2 rounded-full bg-gray-600"></p>
                <p className="w-full h-2 rounded-full bg-gray-600"></p>
                <p className="max-w-[60px] w-[60px] h-2 rounded-full bg-gray-600"></p>
              </div>
            </div>
          </div>
        </div>
        {/*rem <img src="./images/italia2.svg" alt="Phone illustration" className="md:mt-40"/> 
        {/*rem <img src="https://assets.codepen.io/2621168/svgtest.svg" alt="Phone illustration" className="md:mt-40"/> 
        {/rem <img className="max-w-[200px] max-h-[300px]" src="plantrm.png" alt="hero"></img> 
      </div> */}
    </div>
  );
}
