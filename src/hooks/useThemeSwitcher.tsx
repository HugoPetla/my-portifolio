import React, { useEffect, useState } from "react";

const useThemeSwitcher = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState<string>("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPreference = window.localStorage.getItem("theme");

    const handleChangeMediaQuery = () => {
      let check = "light";
      if (userPreference) {
        check = userPreference === "dark" ? "dark" : "light";
      }

      if (!userPreference) {
        check = mediaQuery.matches ? "dark" : "light";
      }

      setMode(check);
      if (check === "dark") {
        document.documentElement.classList.add("dark");
      }
      if (check === "light") {
        document.documentElement.classList.remove("dark");
      }
    };

    mediaQuery.addEventListener("change", handleChangeMediaQuery);

    return () =>
      mediaQuery.removeEventListener("change", handleChangeMediaQuery);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }

    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
