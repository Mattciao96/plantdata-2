import UniversityList from "@/components/university-list";
import { Helmet } from "react-helmet";

export default function WhoAreWe() {
  return (
    <>
      <Helmet>
        <title>Who are we</title>
        <meta name="description" content="Plant Data was originally founded by a core group of six Italian universities: Bologna, Camerino, Perugia, Pisa, Roma (La Sapienza), Trieste." />
        <link rel="icon" href="" />
      </Helmet>
      <UniversityList />
    </>
  );
}