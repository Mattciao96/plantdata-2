import HeroSection from "@/components/hero";
import Grid from "@/components/discover";
import { Helmet} from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>PlantData</title>
        <meta name="description" content="PlantData" />
        <link rel="icon" href="" />
      </Helmet>
      
        <HeroSection></HeroSection>
        <Grid />
    
    </>
  );
}