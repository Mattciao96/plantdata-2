import { Button } from "@/components/ui/button";
import CircleLogo from "@/components/ui/circle";
import ImageScrollFixed from "@/components/ui/image-slide-fixed";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function DiscoverSection() {
  const { t } = useTranslation();

  return (
    <ul>
      {/* SECTION 1 */}
      <li className="mt-24 mb-32 flex min-w-full flex-col items-center justify-evenly gap-4 md:mt-56 md:flex-row">
        <div className=" relative flex items-center justify-center p-12 ">
          <CircleLogo />
        </div>
        <div className="-mt-[100px] flex max-w-[500px] flex-col gap-4 md:mt-0 md:gap-2">
          <h2 className="text-center text-4xl md:text-left">
            {t("about-us.title")}
          </h2>
          <p className="text-balance text-center md:text-left">
            {t("about-us.description")}
          </p>
          <div className="flex justify-center py-2  md:justify-start">
            <Button asChild>
              <Link to={"who-are-we"}>{t("about-us.button")}</Link>
            </Button>
          </div>
        </div>
      </li>
      {/* SECTION 2 */}
      <li className="my-32 flex min-w-full flex-col-reverse items-center justify-evenly gap-4 md:flex-row">
        <div className="-mt-[100px] flex max-w-[500px] flex-col gap-4 md:mt-0 md:gap-2">
          <h2 className="text-center text-4xl md:text-left">
            {" "}
            {t("resources.title")}
          </h2>
          <p className="text-balance text-center md:text-left">
            {t("resources.description")}
          </p>
          <div className="flex justify-center py-2  md:justify-start">
            <Button asChild>
              <Link to={"resources"}>{t("resources.button")}</Link>
            </Button>
          </div>
        </div>
        <div className=" relative flex items-center justify-center gap-8 ">
          <ImageScrollFixed />
        </div>
      </li>
      {/* SECTION 3 */}
      <li className="mb-40 flex min-w-full flex-col items-center justify-evenly gap-4 md:my-60 md:flex-row">
        <div className="relative flex items-center justify-center p-0 md:p-12 ">
          <Globe className="h-[100px] w-[100px] text-[#29a36a] dark:text-[#3ecf8e]" />
        </div>
        <div className="flex max-w-[500px] flex-col gap-4 md:gap-2 ">
          <h2 className="text-center text-4xl md:text-left">
            {t("contacts.title")}
          </h2>
          <p className="text-balance text-center md:text-left">
            {t("contacts.description")}
          </p>
          {/* <div className="flex justify-center py-2 md:justify-start">
            <Button>{t("contacts.button")}</Button>
          </div> */}
        </div>
      </li>
    </ul>
  );
}
