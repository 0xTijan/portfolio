import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "sl";

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const updateLanguageFromQuery = () => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("l");
    if (lang === "en" || lang === "sl") {
      setLanguage(lang as Language);
    } else {
      params.set("l", "en");
      window.history.replaceState(null, "", "?" + params.toString());
      setLanguage("en");
    }
  };

  useEffect(() => {
    updateLanguageFromQuery();
    window.addEventListener("popstate", updateLanguageFromQuery);

    return () => {
      window.removeEventListener("popstate", updateLanguageFromQuery);
    };
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    const params = new URLSearchParams(window.location.search);
    params.set("l", newLanguage);
    window.history.pushState(null, "", "?" + params.toString());
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
