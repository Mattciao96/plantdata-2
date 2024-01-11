import { cn } from "@/lib/utils";

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
  university: string;
  email: string;
};

const universityLoghi: UniversityLogoProps[] = [
  {
    title: "University of Trieste",
    image: "./images/loghi/units.png",
    url: "https://www.units.it",
    className: "filter brightness-0 dark:invert",
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
    className: "max-h-[90px] md:max-h-[100px]",
  },
];

const socialLoghi: SocialLogoProps[] = [
  {
    title: "Plantdata Github",
    image: "./images/loghi/github-mark.svg",
    url: "https://www.units.it",
    className: "filter brightness-0 dark:invert",
  },
  {
    title: "Plantdata Github",
    image: "./images/loghi/github-mark.svg",
    url: "https://www.units.it",
    className: "filter brightness-0 dark:invert",
  },
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
    role: "Lorem role",
    name: "Lorem ipsum",
    university: "University of Trieste",
    email: "lorem@lorem.com",
  },
  {
    role: "Lorem role",
    name: "Lorem ipsum",
    university: "University of Trieste",
    email: "lorem@lorem.com",
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
                className="h-auto max-w-[min(200px,_60%)] brightness-0 filter dark:invert md:max-w-[200px]"
                alt=""
              />
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-[4rem] gap-y-0 py-8">
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
  const { role, name, university, email } = data;
  return (
    <div className="flex h-40 w-auto items-center justify-center rounded-md border border-muted">
      <div className="flex flex-col gap-2 md:pl-4">
        <h2 className="text-3xl">{role}</h2>
        <p className="text-secondary-foreground">{name}</p>
        <p className="text-secondary-foreground">{university}</p>
        <p className="text-secondary-foreground">{email}</p>
      </div>
    </div>
  );
}
