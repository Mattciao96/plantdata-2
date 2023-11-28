import * as React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import { useLockBody } from "@/hooks/use-lock-body.ts";

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed inset-0 bottom-16 -z-10 grid min-h-screen grid-flow-row overflow-auto shadow-md md:hidden"
      )}
    >
      <div className="relative pt-24 pb-4 pl-10 min-h-screen -z-10 grid gap-6 bg-background  text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max ">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <a
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center rounded-md py-3 pl-9 pr-2 text-2xl font-medium hover:underline"
                )}
              >
                {t(item.text)}
              </a>
            </motion.div>
          ))}
        </nav>
        {children}
      </div>
    </motion.div>
  );
}
