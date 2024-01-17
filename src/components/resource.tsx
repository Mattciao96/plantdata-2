import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import Title from "./ui/title";

// data from locales translation.json
const resourcesData = [
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
    link: "https://wikiplantbase.org/",
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
      <Title text={"resources.title"}></Title>
      <main className="flex w-full flex-col">
        {resourcesData.map((resource) => (
          <Resource
            title={resource.title}
            description={resource.description}
            image={resource.image}
            link={resource.link}
            button={resource.button}
            key={resource.title}
          />
        ))}
      </main>
    </>
  );
}

function Resource({ title, description, image, link, button }) {
  const { t } = useTranslation();
  return (
    <div className="mb-20 flex min-w-full flex-col items-center justify-evenly gap-4 rounded-xl border border-input bg-pure p-6 first:mt-0 md:my-14 md:flex-row">
      <div className="relative flex items-center justify-evenly p-0 py-4 md:px-12 ">
        {/* <Globe className="w-[100px] h-[100px] text-[#3ecf8e] dark:text-[#3ecf8e]" /> */}
        <img
          src={image}
          alt={t(title)}
          className="h-[300px] w-[300px] object-contain"
        />
      </div>
      <div className="flex flex-col gap-4 md:w-[60%] md:gap-2 md:px-4">
        <h3 className="text-center text-4xl md:text-left">{t(title)}</h3>
        <p>{t(description)}</p>
        <div className="flex justify-center py-2 md:justify-start">
          <a href={link}>
            <Button>{t(button)}</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
