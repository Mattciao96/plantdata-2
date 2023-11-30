// a hero with a title and a subtitle and image on the right
export default function HeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-evenly flex-col md:flex-row">
      <div className="mt-20 text-justify md:text-left">{children}</div>
      <div className="h-80 object-contain overflow-hidden flex justify-center">
        <img className="max-w-[200px] max-h-[300px]" src="plantrm.png" alt="hero"></img>
      </div>
    </div>
  );
}
