import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { contents } from './contents';
import { Language } from './types';

type Content = (typeof contents)[Language.pt];

interface ContentContextType {
  content: Content;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<Language>>;
  currentLanguage: Language;
}

const ContentContext = createContext<ContentContextType>({
  content: contents[Language.pt],
  setCurrentLanguage: () => {},
  currentLanguage: Language.pt,
});

const fetchContentByLanguage = (language: Language) => {
  return contents[language];
};

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(Language.pt);
  const [content, setContent] = useState<Content>(contents[Language.pt]);

  useEffect(() => {
    setContent(fetchContentByLanguage(currentLanguage));
  }, [currentLanguage]);

  return (
    <ContentContext.Provider value={{ content, setCurrentLanguage, currentLanguage }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = (): ContentContextType => {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error('useContentContext must be used within a ContentProvider');
  }

  return context;
};
