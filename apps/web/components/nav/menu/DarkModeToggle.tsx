"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "../../ui/button";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button
        onClick={() => setTheme("dark")}
        size="icon"
        variant="toggle"
        className="hover:opacity-70 transition-opacity"
      >
        <Moon />
      </Button>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <Button
        onClick={() => setTheme("light")}
        size="icon"
        variant="toggle"
        className="hover:opacity-70 transition-opacity"
      >
        <Sun />
      </Button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Button
        onClick={() => setTheme("dark")}
        size="icon"
        variant="toggle"
        className="hover:opacity-70 transition-opacity"
      >
        <Moon />
      </Button>
    );
  }
};

export default DarkModeToggle;
