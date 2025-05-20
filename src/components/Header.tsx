import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <RefreshCw className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            SoftSell
          </span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["How It Works", "Benefits", "Testimonials", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`transition-colors duration-300 ${
                      isScrolled
                        ? "text-gray-700 hover:text-blue-600 dark:text-black dark:hover:text-blue-400"
                        : "text-gray-800 hover:text-blue-700 dark:text-white dark:hover:text-blue-400"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-all duration-300 shadow-sm hover:shadow-md">
          Get Started
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
