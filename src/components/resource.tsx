import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import Title from "./ui/title";
import { Link } from "react-router-dom";

interface ResourceData {
  title: string;
  image: string;
  description: string;
  link: string;
  button: string;
}

const resourcesData: ResourceData[] = [
  {
    title: "resources.floritaly.title",
    image: "images/sites/floritalylogo.png",
    description: "resources.floritaly.description",
    link: "https://dryades.units.it/floritaly",
    button: "resources.floritaly.button",
  },
  {
    title: "resources.wikiplantbase.title",
    image: "images/sites/wpb.jpg",
    description: "resources.wikiplantbase.description",
    link: "https://bot.biologia.unipi.it/wpb/italia",
    button: "resources.wikiplantbase.button",
  },
  {
    title: "resources.italic.title",
    image: "images/sites/italic.png",
    description: "resources.italic.description",
    link: "https://italic.units.it",
    button: "resources.italic.button",
  },
];

export default function ResourceList() {
  return (
    <>
      <Title text={"resources.title"} />
      <ul className="flex w-full flex-col items-center">
        {resourcesData.map((resource) => (
          <Resource {...resource} key={resource.title} />
        ))}
      </ul>
    </>
  );
}

function Resource({ title, description, image, link, button }: ResourceData) {
  const { t } = useTranslation();
  return (
    <li className="mb-20 flex w-full max-w-[400px] flex-col items-center justify-evenly gap-4 rounded-xl border border-input bg-pure p-6 first:mt-0 last:mb-16 md:my-8 md:max-w-[900px] md:flex-row">
      <div className="relative flex items-center justify-evenly p-0 py-4 md:px-12 ">
        {/* <Globe className="w-[100px] h-[100px] text-[#3ecf8e] dark:text-[#3ecf8e]" /> */}
        <img
          src={image}
          alt={t(title)}
          className="h-[200px] w-[200px] rounded-md object-fill"
        />
      </div>
      <div className="flex flex-col gap-4 md:w-[60%] md:gap-2 md:px-4">
        <h3 className="mb-4 text-center text-4xl md:text-left">{t(title)}</h3>
        <p className="pl-[2px]">{t(description)}</p>
        <div className="flex justify-center py-2 md:justify-start">
          <Button asChild>
            <Link to={link}>{t(button)}</Link>
          </Button>
        </div>
      </div>
    </li>
  );
}
