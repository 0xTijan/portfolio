import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "sl";

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const updateLanguageFromPath = () => {
    const path = window.location.pathname.split("/")[1];
    if (path === "en" || path === "sl") {
      setLanguage(path as Language);
    } else {
      window.history.replaceState(null, "", "/en");
      setLanguage("en");
    }
  };

  useEffect(() => {
    updateLanguageFromPath();
    window.addEventListener("popstate", updateLanguageFromPath);

    return () => {
      window.removeEventListener("popstate", updateLanguageFromPath);
    };
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    window.history.pushState(null, "", `/${newLanguage}`);
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
