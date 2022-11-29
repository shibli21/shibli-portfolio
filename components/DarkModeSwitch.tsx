import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = () => theme === "dark";

  if (!mounted) return <div className="w-11"></div>;

  return (
    <Switch
      checked={isDark()}
      onChange={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className={`${
        isDark() ? "bg-orange-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          isDark() ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};
