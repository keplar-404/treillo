"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DarkToggole() {
  const { setTheme } = useTheme();
  const [theme, updateTheme] = useState<boolean>(false);

  const themeChange = () => {
    if (theme === false) {
      updateTheme(true);
      setTheme("dark");
    } else {
      updateTheme(false);
      setTheme("light");
    }
  };

  return (
    <div>
      <Button onClick={() => themeChange()}>Dark</Button>
    </div>
  );
}
