import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "tabler-icons-react";

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
      className={`${isDark() ? "bg-rose-500" : "bg-gray-200"} relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>

      <Sun className="w-4 h-4 absolute left-1" />
      <Moon className="w-4 h-4 absolute right-1" />
      <span
        className={`${
          isDark() ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};
