import HeroSection from "@/components/hero";
import Grid from "@/components/discover";
import { Helmet} from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>PlantData</title>
        <meta name="description" content="Plant Data is an inter-university research center devoted to plant diversity and big data, founded in 2021. Plant Data aims at studying novel approaches and develop new tools for producing, managing and analysing plant biodiversity data." />
        <link rel="icon" href="" />
      </Helmet>
      
        <HeroSection/>
        <Grid />
    
    </>
  );
}