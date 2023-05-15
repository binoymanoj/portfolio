"use client";
import { useState, useEffect } from "react";

function useTheme() {
  const [theme, setTheme] = useState("light");

  const nextTheme = theme === "light" ? "dark" : "light";
  useEffect(() => {
    const rootElement = window.document.documentElement;
    rootElement.classList.remove(nextTheme);
    rootElement.classList.add(theme);
  }, [theme, nextTheme]);

  return [nextTheme, setTheme];
}

export default useTheme;
