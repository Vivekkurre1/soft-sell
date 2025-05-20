// import React from "react";
// import { Sun, Moon, Palette } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { useThemeStore } from "../store/themeStore";
// import { themes } from "../themes/theme";

const ThemeToggle = () => {
  // const { isDarkMode, toggleDarkMode, currentTheme, setTheme } =
  //   useThemeStore();
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  return (
    <div className="fixed top-4 right-4 flex items-center gap-2 z-50">
      {/* <div className="relative group">
        <button
          className="p-2 rounded-md bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200"
          aria-label="Change theme"
        >
          <Palette className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
        
        <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setTheme(theme.id)}
              className={`w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                currentTheme.id === theme.id ? 'bg-gray-100 dark:bg-gray-700' : ''
              }`}
            >
              {theme.name}
            </button>
          ))}
        </div>
      </div> */}

      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-md bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
