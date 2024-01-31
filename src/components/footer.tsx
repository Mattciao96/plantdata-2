import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type UniversityLogoProps = {
  title: string;
  image: string;
  url: string;
  className?: string;
};
type SocialLogoProps = {
  title: string;
  image: string;
  url: string;
  className?: string;
};
type ContactProps = {
  role: string;
  name: string;
  email: string;
};

const universityLoghi: UniversityLogoProps[] = [
  {
    title: "University of Trieste",
    image: "./images/loghi/units.png",
    url: "https://www.units.it",
    className: "dark:filter dark:brightness-0 dark:invert",
  },
  {
    title: "Lifewatch Italia",
    image: "./images/loghi/lw-ita.png",
    url: "https://www.lifewatchitaly.eu",
    className: "dark:filter dark:brightness-0 dark:invert",
  },

  {
    title: "University of Roma",
    image: "./images/loghi/sap-full.png",
    url: "https://www.uniroma1.it/it/pagina-strutturale/home",
    className: "",
  },

  {
    title: "University of Camerino",
    image: "./images/loghi/cam-full-2.png",
    url: "https://www.unicam.it/",
    className: "",
  },
  {
    title: "University of Perugia",
    image: "./images/loghi/perugia-full.svg",
    url: "https://www.unipg.it/",
    className: "",
  },
  {
    title: "University of Bologna",
    image: "./images/loghi/unibo.png",
    url: "https://www.unibo.it",
    className:
      "max-h-[90px] md:max-h-[100px] dark:filter dark:brightness-0 dark:invert",
  },
  {
    title: "University of Pisa",
    image: "./images/loghi/pisa-full.png",
    url: "https://www.unipi.it/",
    className: "max-h-[90px] md:max-h-[100px] dark:filter dark:brightness-0 dark:invert",
  },
];

const socialLoghi: SocialLogoProps[] = [
  {
    title: "Plantdata Github",
    image: "./images/loghi/github-mark.svg",
    url: "https://www.units.it",
    className: "filter brightness-0 dark:invert",
  },
];
// an array of objects with role, name, university, email
const contacts: ContactProps[] = [
  {
    role: "contacts.people.0.role",
    name: "contacts.people.0.name",
    email: "contacts.people.0.email",
  },
  {
    role: "contacts.people.1.role",
    name: "contacts.people.1.name",
    email: "contacts.people.1.email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-input bg-muted py-6">
      <div className="container">
        {/* rest */}
        <div className="flex flex-col gap-4">
          {/* da buttare dentro un div per con margini ai lati per rendere fisso il numero di loghi */}
          <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-6">
            {universityLoghi.map((data, index) => (
              <UniversityLogo key={index} data={data} />
            ))}
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center md:flex-row md:gap-[4rem]">
            {/* plantdata logo */}
            <div className=" flex items-center justify-center pt-8 md:pt-0">
              <img
                src="./images/other/plantdata.png"
                className="h-auto max-w-[min(150px,_60%)] brightness-0 filter dark:invert md:max-w-[150px]"
                alt=""
              />
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-[4rem] gap-y-6 md:gap-y-0 py-8">
              {contacts.map((data, index) => (
                <Contact key={index} data={data} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-8 border-t border-input pt-6">
          {socialLoghi.map((data, index) => (
            <SocialLogo key={index} data={data} />
          ))}
        </div>
      </div>
    </footer>
  );
}

function UniversityLogo({ data }: { data: UniversityLogoProps }) {
  const { title, image, url, className } = data;
  return (
    <div className="relative flex h-auto w-[48%] max-w-[220px] items-center justify-center rounded-md border border-muted p-2 md:max-h-24 md:min-h-[120px] md:w-52">
      <a href={url} className="absolute inset-0 z-10" aria-label={title} />
      <img src={image} className={cn("", className)} alt={title} />
    </div>
  );
}

function SocialLogo({ data }: { data: SocialLogoProps }) {
  const { title, image, url, className } = data;
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-md border border-muted p-2">
      <a href={url} className="absolute inset-0 z-10" aria-label={title} />
      <img src={image} className={cn("", className)} alt={title} />
    </div>
  );
}

function Contact({ data }: { data: ContactProps }) {
  const { t } = useTranslation();
  const { role, name, email } = data;
  return (
    <div className="flex w-auto items-start justify-center rounded-md border border-muted">
      <div className="w-44 flex flex-col gap-2 pl-2 md:pl-4">
        <h2 className="text-2xl">{t(role)}</h2>
        <p className="pl-[2px] text-sm text-secondary-foreground">{t(name)}</p>
        <p className="pl-[3px] text-sm text-secondary-foreground">{t(email)}</p>
      </div>
    </div>
  );
}
