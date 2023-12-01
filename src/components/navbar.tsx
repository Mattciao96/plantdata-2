import * as React from "react";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/toggle-language";
import { Fade as Hamburger } from "hamburger-react";
import { MobileNav } from "./navbar-mobile";
import { ModeToggle } from "./toggle-light-dark";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
/* import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; */
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { text: string; href: string }[] = [
  {
    text: "nav-links.who-are-we",
    href: "who-are-we",
  },
  {
    text: "nav-links.resources",
    href: "resources",
  },
  {
    text: "nav-links.contacts",
    href: "contacts",
  },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  return (
    <header className="sticky top-0 z-20 border-b border-input shadow-sm">
      <NavigationMenu
        className="min-h-[3.4rem] container flex justify-between max-w relative z-50
      bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="p-[4px] flex items-center">
          {/* <img src="plantdata.png" alt="PlantData logo" /> */}
          <Leaf className="h-9 w-9 text-[#3ecf8e]" />
          <Link
            to={"/"}
            className="pl-1 text-2xl font-bold"
            onClick={() => {
              showMobileMenu && setShowMobileMenu(false);
            }}
          >
            PlantData
          </Link>
        </div>
        {/* this is for desktop */}
        <NavigationMenuList className="p-3 hidden md:flex">
          {components.map((component, index) => (
            <NavigationMenuItem key={index}>
              <Link to={component.href}>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-secondary/90 hover:backdrop-blur hover:supports-[backdrop-filter]:bg-secondary/60"
                  )}
                >
                  {t(component.text)}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
          {/* options */}
          <NavigationMenuItem>
            <div className="px-4 flex gap-6 justify-center">
              <ModeToggle />

              <LanguageSwitcher />
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="md:hidden">
          <Hamburger
            size={26}
            toggled={showMobileMenu}
            toggle={setShowMobileMenu}
          />
        </div>
        {showMobileMenu && components && (
          <MobileNav items={components} onClick={setShowMobileMenu}>
            <NavOptionButtons />
          </MobileNav>
        )}
      </NavigationMenu>
    </header>
  );
}

function NavOptionButtons() {
  return (
    <div className="px-4 flex gap-6 justify-center items-end">
      <ModeToggle />
      <LanguageSwitcher />
    </div>
  );
}

/* const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
 */
