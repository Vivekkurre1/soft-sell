import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import { useThemeStore } from "./store/themeStore";

function App() {
  const { isDarkMode, currentTheme } = useThemeStore();

  // Apply theme to root element
  React.useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Apply theme colors
    root.style.setProperty(
      "--color-primary",
      `var(--${currentTheme.colors.primary}-600)`
    );
    root.style.setProperty(
      "--color-secondary",
      `var(--${currentTheme.colors.secondary}-600)`
    );
    root.style.setProperty(
      "--color-accent",
      `var(--${currentTheme.colors.accent}-600)`
    );
  }, [isDarkMode, currentTheme]);

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
