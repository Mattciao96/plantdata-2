import ResourceList from "@/components/resource";
import { Helmet} from "react-helmet";
export default function Resources() {
  return (
    <>
      <Helmet>
        <title>Resources</title>
        <meta name="description" content="Resources" />
        <link rel="icon" href="" />
      </Helmet>
      <ResourceList />
    </>
  );
}
