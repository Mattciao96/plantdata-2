import UniversityList from "@/components/university-list";
import { Helmet} from "react-helmet";
export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
        <meta name="description" content="Contacts" />
        <link rel="icon" href="" />
      </Helmet>
      <UniversityList />
    </>
  );
}
