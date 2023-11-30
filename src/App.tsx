import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/toggle-light-dark";
import { Button } from "@/components/ui/button";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import Grid from "./components/discover";
import Footer from "./components/footer";
import LanguageSwitcher from "@/components/toggle-language";
import { Rat } from "lucide-react";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-input shadow-sm">
        <Navbar />
      </header>
      <main className="container">
        <HeroSection>
          {i18n.resolvedLanguage === "en" && (
            <h1 className="text-[#3ecf8e]  text-title font-medium text-center md:text-left">
              {t("home-title")}
            </h1>
          )}
          <h2 className=" text-title font-medium text-center md:text-left">
            {t("home-subtitle.part1")}
          </h2>
          <h2 className=" text-title font-medium text-center md:text-left">
            {t("home-subtitle.part2")}
          </h2>
          {i18n.resolvedLanguage === "it" && (
            <h1 className="text-[#3ecf8e]  text-title font-medium text-center md:text-left">
              {t("home-title")}
            </h1>
          )}
          <p className="text-center max-w-md md:text-justify md:pl-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            repellendus sit quia commodi illum quod voluptatibus? Reprehenderit,
            odio consequatur. Magnam vero laudantium perferendis provident
            facilis aperiam omnis quam, fuga corporis!
          </p>
          <div className="md:pl-1 py-2">
            <Button>Risorse </Button>
          </div>
        </HeroSection>
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
