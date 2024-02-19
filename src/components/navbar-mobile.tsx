import * as React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { useLockBody } from "@/hooks/use-lock-body.ts";

interface MobileNavProps {
  items: { text: string; href: string }[];
  onClick: (value: boolean) => void;
  children?: React.ReactNode;
}

export function MobileNav({ items, onClick, children }: MobileNavProps) {
  useLockBody();
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed inset-0 bottom-16 -z-10 grid min-h-[100dvh] grid-flow-row overflow-auto shadow-md md:hidden",
      )}
    >
      {/* hide overscroll GOLDDDD */}
      <div className="fixed top-0 min-h-[3.4rem] w-full min-w-full bg-background"/>
      <div className="h-max-content relative -z-10 grid min-h-[100dvh] gap-6 bg-background px-10 pb-4 pt-24  text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max ">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                key={index}
                to={item.href}
                className={cn(
                  "flex items-center rounded-md py-3 pl-9 pr-2 text-2xl font-medium hover:underline",
                )}
                onClick={() => onClick(false)}
              >
                {t(item.text)}
              </Link>
            </motion.div>
          ))}
        </nav>
        {children}
      </div>
    </motion.div>
  );
}
