// a hero with a title and a subtitle and image on the right
export default function HeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-evenly flex-col md:flex-row">
      <div className="mt-20 text-justify md:text-left">{children}</div>
      <div className="py-12 md:h-[40rem] object-contain overflow-hidden flex justify-center">
      <img src="https://assets.codepen.io/2621168/svgtest.svg" alt="Phone illustration" className="md:mt-40"/>
        {/* <img className="max-w-[200px] max-h-[300px]" src="plantrm.png" alt="hero"></img> */}
      </div>
    </div>
  );
}
