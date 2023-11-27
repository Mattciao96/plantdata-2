import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/toggle-light-dark";
import { Button } from "@/components/ui/button";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import LanguageSwitcher from "@/components/toggle-language";

function App() {
  const { t } = useTranslation();

  return (
    <main>
      <Navbar />
      <HeroSection>
        <h1 className="text-[#3ecf8e] text-6xl font-medium">
          {t("home-title")}
        </h1>
        <h2 className="text-5xl font-medium">{t("home-subtitle")}</h2>
      </HeroSection>
      <Button>Hello</Button>
      <div className="p-4 flex justify-center">
        <ModeToggle />
      </div>
      <LanguageSwitcher />
      <p>
        <Trans i18nKey="description.part1">
          Edit <code>src/App.js</code> and save to reload.
        </Trans>
      </p>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {t("description.part2")}
      </a>
      <p>{t("floritaly-description")}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil totam
        necessitatibus esse odit magni earum quod repellendus sunt, cum animi
        doloribus amet molestiae minima. Architecto nulla quae neque quia porro?
      </p>

      <h1 className="text-9xl">hello worldy</h1>
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ x: 100 }}
          transition={{ duration: 2 }}
        >
          hello world
        </motion.div>
      </div>
      <div className="p-4 flex justify-center">
        <ModeToggle />
      </div>
    </main>
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
