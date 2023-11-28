import * as React from "react"

import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body.ts"

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MobileNavProps) {
   useLockBody()

  return (
    <div
      className={cn(
        "fixed inset-0 bottom-16 -z-10 grid min-h-screen grid-flow-row  overflow-auto shadow-md animate-in slide-in-from-top-80 md:hidden"
      )}
    >
      <div className="relative min-h-screen -z-10 grid gap-6 rounded-md bg-background py-4 pl-10 text-popover-foreground shadow-md">
        <a href="/" className="flex items-center space-x-2">
          
          <span className="font-bold">Bojh</span>
        </a>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </a>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}
