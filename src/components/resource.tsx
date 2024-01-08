import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import Title from "./ui/title";

// data from locales translation.json
const resourcesData = [
  {
    title: "floritaly.title",
    image: "images/sites/floritalylogo.png",
    description: "floritaly.description",
    link: "https://dryades.units.it/floritaly",
    button: "resources-button",
  },
  {
    title: "wikiplantbase.title",
    image: "images/sites/wpb.jpg",
    description: "wikiplantbase.description",
    link: "https://wikiplantbase.org/",
    button: "resources-button",
  },
  {
    title: "italic.title",
    image: "images/sites/italic.png",
    description: "italic.description",
    link: "https://italic.units.it",
    button: "resources-button",
  },
];

export default function ResourceList() {
  return (
    <>
      <Title text={"resources-title"}></Title>
      <main className="flex flex-col w-full">
        {resourcesData.map((resource) => (
          <Resource
            title={resource.title}
            description={resource.description}
            image={resource.image}
            link={resource.link}
            button={resource.button}
          />
        ))}
      </main>
    </>
  );
}

function Resource({ title, description, image, link, button }) {
  const { t } = useTranslation();
  return (
    <div className="min-w-full flex flex-col border border-input bg-muted rounded-xl md:flex-row justify-evenly items-center gap-4 p-6 md:my-14 first:mt-0 mb-20">
      <div className="p-0 md:px-12 py-4 relative flex justify-evenly items-center ">
        {/* <Globe className="w-[100px] h-[100px] text-[#3ecf8e] dark:text-[#3ecf8e]" /> */}
        <img src={image} alt={t(title)} className="object-contain w-[300px] h-[300px]"/>
      </div>
      <div className="flex flex-col md:w-[60%] gap-4 md:gap-2 md:px-4">
        <h3 className="text-4xl text-center md:text-left">{t(title)}</h3>
        <p>{t(description)}</p>
        <div className="flex justify-center md:justify-start py-2">
          <a href={link}>
            <Button>{t(button)}</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
