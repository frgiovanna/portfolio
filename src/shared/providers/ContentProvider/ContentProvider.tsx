import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { contents } from './contents';
import { Language } from './types';
import { getDefaultLanguage } from './getDefaultLanguage';

type Content = (typeof contents)[Language.pt];

interface ContentContextType {
  content: Content;
  setLanguage: (language: Language) => void;
  currentLanguage: Language;
}

const defaultLanguage = getDefaultLanguage();

const ContentContext = createContext<ContentContextType>({
  content: contents[defaultLanguage],
  setLanguage: () => {},
  currentLanguage: defaultLanguage,
});

function fetchContentByLanguage(language: Language) {
  return contents[language];
}

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(defaultLanguage);
  const [content, setContent] = useState<Content>(contents[defaultLanguage]);

  function setLanguage(language: Language) {
    localStorage.setItem('@frgiovanna:preferred-language', language);
    setCurrentLanguage(language);
  }

  useEffect(() => {
    setContent(fetchContentByLanguage(currentLanguage));
  }, [currentLanguage]);

  return (
    <ContentContext.Provider value={{ content, setLanguage, currentLanguage }}>{children}</ContentContext.Provider>
  );
};

export const useContentContext = (): ContentContextType => {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error('useContentContext must be used within a ContentProvider');
  }

  return context;
};
