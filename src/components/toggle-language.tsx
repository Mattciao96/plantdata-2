import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const lngs: Record<string, { nativeName: string }> = {
  en: { nativeName: "English" },
  it: { nativeName: "Italiano" },
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.resolvedLanguage?.toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="focus-invisible bg-transparent hover:bg-secondary/90 hover:backdrop-blur hover:supports-[backdrop-filter]:bg-secondary/60"
        >
          <span>{selectedLanguage}</span>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-[5rem] dark:border dark:border-input"
        align="end"
      >
        {Object.keys(lngs).map((lng) => (
          <DropdownMenuItem
            key={lng}
            className={cn(i18n.resolvedLanguage === lng && "font-bold")}
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
