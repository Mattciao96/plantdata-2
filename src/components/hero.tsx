// a hero with a title and a subtitle and image on the right

export default function HeroSection() {
  return (
    <div className="h-80 flex justify-evenly">
      <div>
      <h2 className="text-5xl font-medium">Centro interuniversitario</h2>
      <h1 className="text-[#3ecf8e] text-6xl font-medium">PlantData</h1>
        
      </div >
      
      <img className="max-w-md" src="plantrm.png" alt="hero"></img>
    </div>
  );
}
