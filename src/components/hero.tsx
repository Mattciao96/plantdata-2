// a hero with a title and a subtitle and image on the right

export default function HeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-80 flex justify-evenly">
      <div>{children}</div>

      <img className="max-w-md" src="plantrm.png" alt="hero"></img>
    </div>
  );
}
