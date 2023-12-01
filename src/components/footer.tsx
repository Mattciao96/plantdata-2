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

const universityLoghi: UniversityLogoProps[] = [
  {
    title: "University of Trieste",
    image: "./loghi/units.png",
    url: "https://www.units.it",
    className: "filter brightness-0 dark:invert",
  },
  {
    title: "University of Trieste",
    image: "./loghi/units.png",
    url: "https://www.units.it",
    className: "filter brightness-0 dark:invert",
  },
  {
    title: "University of Trieste",
    image: "./loghi/units.png",
    url: "https://www.units.it",
    className: "filter brightness-0 dark:invert",
  },
  {
    title: "University of Trieste",
    image: "./loghi/units.png",
    url: "https://www.units.it",
    className: "filter brightness-0 dark:invert",
  },
];

const socialLoghi: SocialLogoProps[] = [
  {
    title: "Plantdata Github",
    image: "./loghi/github-mark.svg",
    url: "https://www.units.it",
    className: "filter brightness-0 dark:invert",
  },
  {
    title: "Plantdata Github",
    image: "./loghi/github-mark.svg",
    url: "https://www.units.it",
    className: "filter brightness-0 dark:invert",
  },
  {
    title: "Plantdata Github",
    image: "./loghi/github-mark.svg",
    url: "https://www.units.it",
    className: "filter brightness-0 dark:invert",
  },
];

export default function Footer() {
  return (
    <footer className="py-6 container border-t border-input shadow-sm">
      {/* da buttare dentro un div per con margini ai lati per rendere fisso il numero di loghi */}
      <div className="flex justify-center flex-row flex-wrap gap-8">
        {universityLoghi.map((data, index) => (
          <UniversityLogo key={index} data={data} />
        ))}
      </div>
      <div className="py-8 flex justify-center flex-row flex-wrap gap-8">
        {Array.from({ length: 2 }, (_, i) => (
          <div className="w-80 h-80 border border-inpur rounded-md border-input flex items-center justify-center">
            contatti-{i}
          </div>
        ))}
      </div>
      <div className="pt-6 border-t border-input flex justify-center gap-8">
        {socialLoghi.map((data, index) => (
          <SocialLogo key={index} data={data} />
        ))}
      </div>
    </footer>
  );
}

function UniversityLogo({ data }: { data: UniversityLogoProps }) {
  const { title, image, url, className } = data;
  return (
    <div className="w-40 h-24 p-2 relative border border-input rounded-md flex items-center justify-center">
      <a href={url} className="absolute inset-0 z-10" aria-label={title} />
      <img src={image} className={cn("", className)} alt={title} />
    </div>
  );
}

function SocialLogo({ data }: { data: SocialLogoProps }) {
  const { title, image, url, className } = data;
  return (
    <div className="w-12 h-12 p-2 relative border border-input rounded-md flex items-center justify-center">
      <a href={url} className="absolute inset-0 z-10" aria-label={title} />
      <img src={image} className={cn("", className)} alt={title} />
    </div>
  );
}
