"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted && resolvedTheme) {
      document.documentElement.classList.add("dark");
    }
  }, [mounted, resolvedTheme, setTheme]);
  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  if (!mounted) return null;
  return (
    <label className="swap swap-flip text-3xl">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        checked={resolvedTheme === "dark"}
        onChange={handleCheckboxChange}
      />
      <div className="swap-on">😈</div>
      <div className="swap-off">😇</div>
    </label>
  );
}
