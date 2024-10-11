import LanguageIcon from '@mui/icons-material/Language';
import { IconMenu } from '@shared/components/IconMenu';
import { Language, useContentContext } from '@shared/providers/ContentProvider';

export function LanguageSwitch() {
  const languages = ['pt-BR', 'en-US'];

  const { setCurrentLanguage, currentLanguage } = useContentContext();

  function isValidLanguage(language: string): language is Language {
    return Object.values(Language).includes(language as Language);
  }

  function onChange(language: string) {
    const selectedLanguage = isValidLanguage(language) ? language : currentLanguage;

    setCurrentLanguage(selectedLanguage);
  }
  return (
    <IconMenu
      icon={LanguageIcon}
      items={languages}
      onChange={onChange}
      iconSize={24}
      defaultSelected={currentLanguage}
    />
  );
}
