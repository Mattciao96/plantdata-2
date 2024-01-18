import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import Title from "./ui/title";
import axios from "axios";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

// call the api (https://dryades.units.it/plantdata/university) usin axios and react-query v5 to get the list of universities
function useUniversity() {
  return useQuery({
    queryKey: ["university"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://dryades.units.it/api_test/plantdata/university",
      );
      return data;
    },
  });
}

export default function UniversityList() {
  return (
    <>
      <Title text={"resources.title"}></Title>
      <main className="flex w-full flex-col">
        <QueryClientProvider client={queryClient}>
          <UniversityListGet />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </main>
    </>
  );
}

function UniversityListGet() {
  const { status, data, error } = useUniversity();
  return (
    <div>
      {status === "pending" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          {data.map((university) => (
            <University
              title={university.university}
              link={university.website}
              pointOfContact={university.point_of_contact}
              email={university.email}
              key={university.id}
            />
          ))}
        </>
      )}
    </div>
  );
}

function University({ title, link, pointOfContact, email }) {
  //const { t } = useTranslation();
  return (
    <div className="mb-20 flex min-w-full flex-col items-center justify-evenly gap-4 rounded-xl border border-input bg-pure p-6 first:mt-0 md:my-14 md:flex-row">
      <div className="relative flex items-center justify-evenly p-0 py-4 md:px-12 ">
        {/* <Globe className="w-[100px] h-[100px] text-[#3ecf8e] dark:text-[#3ecf8e]" /> */}
        {/* <img
          src={image}
          alt={t(title)}
          className="h-[300px] w-[300px] object-contain"
        /> */}
        <div></div>
      </div>
      <div className="flex flex-col gap-4 md:w-[60%] md:gap-2 md:px-4">
        <h3 className="text-center text-4xl md:text-left">{title}</h3>
        <p>{pointOfContact}</p>
        <p>{email}</p>
        <div className="flex justify-center py-2 md:justify-start">
          <a href={link}>
            <Button>Go</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
