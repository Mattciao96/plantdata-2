import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { useTranslation } from "react-i18next";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="focus-invisible bg-transparent hover:bg-secondary/90 hover:backdrop-blur hover:supports-[backdrop-filter]:bg-secondary/60">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[6rem] dark:border dark:border-input" align="end">
        <DropdownMenuItem
          className={cn(theme === "light" && "font-bold")}
          onClick={() => setTheme("light")}
        >
          {t("theme.light")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(theme === "dark" && "font-bold")}
          onClick={() => setTheme("dark")}
        >
          {t("theme.dark")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(theme === "system" && "font-bold")}
          onClick={() => setTheme("system")}
        >
          {t("theme.system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
