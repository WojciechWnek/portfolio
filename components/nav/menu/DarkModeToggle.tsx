"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "../../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={() => setTheme("dark")}
            size="icon"
            variant="toggle"
            className="transition-opacity hover:opacity-70"
          >
            <Moon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Switch mode</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={() => setTheme("light")}
            size="icon"
            variant="toggle"
            className="transition-opacity hover:opacity-70"
          >
            <Sun />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Switch mode</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={() => setTheme("dark")}
            size="icon"
            variant="toggle"
            className="transition-opacity hover:opacity-70"
          >
            <Moon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Switch mode</p>
        </TooltipContent>
      </Tooltip>
    );
  }
};

export default DarkModeToggle;
