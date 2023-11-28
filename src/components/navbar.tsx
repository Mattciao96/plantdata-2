import * as React from "react";
import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/toggle-language";
import { Fade as Hamburger } from 'hamburger-react'
import { MobileNav } from "./navbar-mobile";
import { ModeToggle } from "./toggle-light-dark";
/* import { cn } from "@/lib/utils"; */
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
    href: "/who-are-we",
  },
  {
    text: "nav-links.resources",
    href: "/resources",
  },
  {
    text: "nav-links.contacts",
    href: "/contacts",
  },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  return (
    <NavigationMenu
      className="min-h-[4rem] container bg-background flex justify-between max-w-7xl relative z-50
    "
    >
      <div className="p-[4px] flex items-center">
        {/* <img src="plantdata.png" alt="PlantData logo" /> */}
        <Leaf className="h-9 w-9 text-[#3ecf8e]" />
        <span className="pl-1 text-[#3ecf8e] text-2xl font-bold">PlantData</span>
      </div>
      {/* this is for desktop */}
      <NavigationMenuList className="p-3 hidden md:flex">
        {components.map((component, index) => (
          <NavigationMenuItem key={index}>
            <a href={component.href}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t(component.text)}
              </NavigationMenuLink>
            </a>
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
      {/* this is for mobile */}
      {/* <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? "X" : "="}
      </button> */}
      <div className="md:hidden">
        <Hamburger size={ 30} toggled={showMobileMenu} toggle={setShowMobileMenu} />
        </div>
      {showMobileMenu && components && (
        <MobileNav items={components}>
          <NavOptionButtons />
        </MobileNav>
      )}
    </NavigationMenu>
  );
}

function NavOptionButtons() {
  return (
    <div className="-ml-10 px-4 flex gap-6 justify-center items-end">
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
