"use client";

import { useTheme } from "next-themes";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-8 h-8 px-0">
          <Icons.sun className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0 cyberpunk:scale-0 retro:scale-0 paper:scale-0 aurora:scale-0 synthwave:scale-0" />
          <Icons.moon className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100 cyberpunk:scale-0 retro:scale-0 paper:scale-0 aurora:scale-0 synthwave:scale-0" />
        <Icons.synthwave className="absolute transition-all scale-0 rotate-90 synthwave:rotate-0 synthwave:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Icons.sun className="w-4 h-4 mr-2" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Icons.moon className="w-4 h-4 mr-2" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Icons.laptop className="w-4 h-4 mr-2" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
