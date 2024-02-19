import { Helmet } from "react-helmet";
import Title from "@/components/ui/title";
import { useTranslation } from "react-i18next";

interface ContactProps {
  role: string;
  name: string;
  email: string;
}

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

export default function Contacts() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>PlantData Contacts</title>
        <meta
          name="description"
          content="For information on Plant Data you can contact the coordinator, prof. Stefano Martellos (martelst@units.it) or the secretary, prof. Jury Nascimbene (juri.nascimbene@unibo.it)."
        />
        <link rel="icon" href="" />
      </Helmet>

      <Title text={"contacts.title"} />
      <ul className="flex flex-col items-center gap-4">
        {contacts.map((contact, index) => (
          <li className="max-w-[300px]" key={index}>
            <h3 className="text-center text-2xl md:mb-2 md:max-w-full ">
              {t(contact.role)}
            </h3>
            <div>
              <p className="text-center text-[14px] md:mb-4 md:pl-1">
                {t(contact.name)}
                <br />
                <a className="text-blue-600 dark:text-blue-500 hover:underline" href={`mailto:${t(contact.email)}`}>{t(contact.email)}</a>
              </p>
            </div>
          </li>
        ))}
      </ul>
      {/* <div className="flex justify-center">Coming soon</div> */}
    </>
  );
}
