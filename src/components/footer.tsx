// create footer component to put all the logos in a flexbox

// import * as React from "react";

export default function Footer() {
  return (
    <footer className="py-6 container border-t border-input shadow-sm">
      {/* da buttare dentro un div per con margini ai lati per rendere fisso il numero di loghi */}
      <div className="flex justify-center flex-row flex-wrap gap-8">
        {Array.from({ length: 6 }, (_, i) => (
          <div className="w-40 h-24 border border-input rounded-md flex items-center justify-center">
            logo-{i}
          </div>
        ))}
      </div>
      <div className="py-8 flex justify-center flex-row flex-wrap gap-8">
        {Array.from({ length: 2 }, (_, i) => (
          <div className="w-80 h-80 border border-inpur rounded-md border-input flex items-center justify-center">
            contatti-{i}
          </div>
        ))}
      </div>
      <div className="pt-6 border-t border-input flex justify-center gap-8">
        {Array.from({ length: 4 }, (_, i) => (
          <div className="w-10 h-10 border border-inpur rounded-md border-input md:text-left flex items-center justify-center">
            s-{i}
          </div>
        ))}
      </div>
    </footer>
  );
}
