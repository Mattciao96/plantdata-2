import UniversityList from "@/components/university-list";
import { Helmet } from "react-helmet";
export default function Contacts() {
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
      <UniversityList />
    </>
  );
}
