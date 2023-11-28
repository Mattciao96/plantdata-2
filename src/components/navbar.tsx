import * as React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/toggle-language";
import { MobileNav } from "./navbar-mobile";
import { ModeToggle } from "./toggle-light-dark";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  return (
    <NavigationMenu className="container bg-background flex justify-between max-w-7xl relative z-50
    ">
      <div className="p-[4px] w-20 bg-background ">
        <img src="plantdata.png" alt="PlantData logo" />
      </div>
      {/* this is for desktop */}
      <NavigationMenuList className="p-3 hidden md:flex">
        <NavigationMenuItem>
          <a href="/who-are-we">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("nav-links.who-are-we")}
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/resources">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("nav-links.resources")}
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/contacts">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("nav-links.contacts")}
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <div className="px-4 flex gap-6 justify-center">
            <ModeToggle />

            <LanguageSwitcher />
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
      {/* this is for mobile */}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? "X" : "="}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && components && (
        <MobileNav items={components}><NavOptionButtons/></MobileNav>
      )}
    </NavigationMenu>
  );
}

function NavOptionButtons() {
  return (
    <div className="px-4 flex gap-6 justify-center">
      <ModeToggle />

      <LanguageSwitcher />
    </div>
  );
}

const ListItem = React.forwardRef<
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
