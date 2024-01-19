import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
export default function HeroSection() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col justify-evenly md:flex-row">
      <div className=" mt-10 text-justify md:mt-20 md:text-left">
        {i18n.resolvedLanguage === "en" && (
          <h1 className="text-title -mx-4 text-center  font-medium text-[#3ecf8e] md:mx-0 md:text-left">
            {t("hero.title")}
          </h1>
        )}
        <h2 className="text-title -mx-4 text-center font-medium md:mx-0 md:text-left">
          {t("hero.subtitle.part1")}
        </h2>
        <h2 className="text-title -mx-4 text-center font-medium md:mx-0 md:text-left">
          {t("hero.subtitle.part2")}
        </h2>
        {i18n.resolvedLanguage === "it" && (
          <h1 className="text-title -mx-4 text-center font-medium text-[#3ecf8e] md:mx-0 md:text-left">
            {t("hero.title")}
          </h1>
        )}
        <p className="m-auto max-w-[580px] text-balance pt-8 text-center md:m-0 md:py-4 md:pl-1 md:text-left">
          {t("hero.description")}
        </p>
        <div className="flex justify-center py-2 md:justify-start md:pl-1">
          <Button>
            <Link to="resources">{t("hero.button")}</Link>
          </Button>
        </div>
      </div>
      {/* <div className="hidden md:mt-28 md:block w-full h-full max-h-[500px] max-w-[500px]">
        <img className="m-h-[inherit]" src="./images/other/leaves3.png" alt="" />
      </div> */}
      <div className="hidden h-full max-h-[500px] w-full max-w-[500px] md:mt-2 md:block">
        <img
          className="m-h-[inherit]"
          src="./images/other/planthero.png"
          alt=""
        />
      </div>
      {/* <div className="relative py-32 md:min-w-[600px] md:h-[40rem] object-contain overflow-hidden flex justify-center">
        <img className="absolute -mt-[120px] w-[400px] h-auto -ml-[250px]" src="./images/other/planthero.png" alt="" />
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
                  src="./images/other/Frame.svg"
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
        {/*rem <img src="./images/other/italia2.svg" alt="Phone illustration" className="md:mt-40"/> 
        rem <img src="https://assets.codepen.io/2621168/svgtest.svg" alt="Phone illustration" className="md:mt-40"/> 
        {/rem <img className="max-w-[200px] max-h-[300px]" src="plantrm.png" alt="hero"></img> 
      </div> */}
    </div>
  );
}
