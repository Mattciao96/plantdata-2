import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/toggle-light-dark";
import { Button } from "@/components/ui/button";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import LanguageSwitcher from "@/components/toggle-language";
import { Rat } from "lucide-react";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-input shadow-sm">
        <Navbar />
      </header>
      <main className="container max-w-7xl">
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
          doloribus amet molestiae minima. Architecto nulla quae neque quia
          porro?
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
        <div className="mr-auto ml-auto">
        <div className="flex flex-col">
          {Array.from({ length: 200 }, (_, i) => (
            <Rat className="h-[2.2rem] w-[2.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          ))}
          </div>
          
          </div>
      </main>
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
