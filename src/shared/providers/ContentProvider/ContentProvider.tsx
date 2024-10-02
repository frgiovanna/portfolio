import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { contents } from './contents';

type Content = (typeof contents)['pt-br'];
type Language = 'pt-br' | 'en-us';

interface ContentContextType {
  content: Content;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const ContentContext = createContext<ContentContextType>({
  content: contents['pt-br'],
  setLanguage: () => {},
});

const fetchContentByLanguage = (language: Language) => {
  return contents[language];
};

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-br');
  const [content, setContent] = useState<Content>(contents['pt-br']);

  useEffect(() => {
    setContent(fetchContentByLanguage(language));
  }, [language]);

  return <ContentContext.Provider value={{ content, setLanguage }}>{children}</ContentContext.Provider>;
};

export const useContentContext = (): ContentContextType => {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error('useContentContext must be used within a ContentProvider');
  }

  return context;
};
