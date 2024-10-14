import LanguageIcon from '@mui/icons-material/Language';
import { IconMenu } from '@shared/components/IconMenu';
import { Language, useContentContext } from '@shared/providers/ContentProvider';

export function LanguageSwitch() {
  const {
    content: { languages },
    setLanguage,
    currentLanguage,
  } = useContentContext();

  function isValidLanguage(language?: string): language is Language {
    return Boolean(language) && Object.values(Language).includes(language as Language);
  }

  function onChange(language: string) {
    const languageId = Object.entries(languages).find(([, label]) => label === language)?.[0];

    const selectedLanguage = isValidLanguage(languageId) ? languageId : currentLanguage;

    setLanguage(selectedLanguage);
  }

  return (
    <IconMenu
      icon={LanguageIcon}
      items={Object.values(languages)}
      onChange={onChange}
      iconSize={24}
      defaultSelected={languages[currentLanguage]}
    />
  );
}
