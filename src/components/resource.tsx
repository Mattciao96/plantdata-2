import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import Title from "./ui/title";

// data from locales translation.json
const resourcesData = [
  {
    "title": "floritaly.title",
    "image": "italic.png",
    "description": "floritaly.description",
    "link": "https://dryades.units.it/floritaly",
    "button": "resources-button",
  },
  {
    "title": "wikiplantbase.title",
    "image": "italic.png",
    "description": "wikiplantbase.description",
    "link": "https://wikiplantbase.org/",
    "button": "resources-button",
  },
  {
    "title": "italic.title",
    "image": "italic.png",
    "description": "italic.description",
    "link": "https://italic-project.info/",
    "button": "resources-button"
  },
]

export default function ResourceList() {
  return (
    <>
      <Title text={"resources-title"}></Title>
      <main className="flex flex-col w-full">
        {resourcesData.map((resource) => (
          <Resource
            title={resource.title}
            description={resource.description}
            link={resource.link}
            button={resource.button}
          />
        ))}
      </main>
    </>
  );
}

function Resource({ title, description, link, button  }) {
  const { t } = useTranslation();
  return (
    <div className="min-w-full flex flex-col border border-input rounded-xl md:flex-row justify-evenly items-center gap-4 py-6 md:my-20 mb-20">
      <div className="p-0 md:p-12 relative flex justify-evenly items-center ">
        <Globe className="w-[100px] h-[100px] text-[#3ecf8e] dark:text-[#3ecf8e]" />
      </div>
      <div className="flex flex-col max-w-[500px] gap-4 md:gap-2 ">
        <h3 className="text-4xl text-center md:text-left">{t(title)}</h3>
        <p>
          {t(description) }
        </p>
        <div className="flex justify-center md:justify-start py-2">
          <Button>{t(button)}</Button>
        </div>
      </div>
    </div>
  );
}
