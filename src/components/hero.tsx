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
          <p className="pt-8 md:py-4 m-auto md:m-0 max-w-md text-justify md:pl-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            repellendus sit quia commodi illum quod voluptatibus? Reprehenderit,
            odio consequatur. Magnam vero laudantium perferendis provident
            facilis aperiam omnis quam, fuga corporis!
          </p>
          <div className="flex justify-center md:justify-start md:pl-1 py-2">
            <Button>Risorse</Button>
          </div>
      </div>
      <div className="py-12 md:h-[40rem] object-contain overflow-hidden flex justify-center">
      <img src="https://assets.codepen.io/2621168/svgtest.svg" alt="Phone illustration" className="md:mt-40"/>
        {/* <img className="max-w-[200px] max-h-[300px]" src="plantrm.png" alt="hero"></img> */}
      </div>
    </div>
  );
}
