import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import Grid from "./components/discover";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-input shadow-sm">
        <Navbar />
      </header>
      <main className="container">
        <HeroSection></HeroSection>
        <Grid />
      </main>
      <Footer />
    </>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </Suspense>
  );
}
