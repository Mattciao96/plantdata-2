import ResourceList from "@/components/resource";
import { Helmet} from "react-helmet";
export default function Resources() {
  return (
    <>
      <Helmet>
        <title>PlantData Resources</title>
        <meta name="description" content="Plant Data contributes to the development of several resources, from databases to tools for research data retrieval. These resources are and will be always available online to everybody." />
        <link rel="icon" href="" />
      </Helmet>
      <ResourceList />
    </>
  );
}
