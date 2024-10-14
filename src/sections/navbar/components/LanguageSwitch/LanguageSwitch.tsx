import LanguageIcon from '@mui/icons-material/Language';
import { IconMenu } from '@shared/components/IconMenu';
import { Language, useContentContext } from '@shared/providers/ContentProvider';

export function LanguageSwitch() {
  const {
    content: { languages },
    setLanguage,
    currentLanguage,
  } = useContentContext();

  const languageList = languages.map((language) => language.label);

  const languageItem = languages.find((lang) => lang.id === currentLanguage)?.label;

  function isValidLanguage(language?: string): language is Language {
    return Boolean(language) && Object.values(Language).includes(language as Language);
  }

  function onChange(language: string) {
    const languageId = languages.find((lang) => lang.label === language)?.id;

    const selectedLanguage = isValidLanguage(languageId) ? languageId : currentLanguage;

    setLanguage(selectedLanguage);
  }

  return (
    <IconMenu
      icon={LanguageIcon}
      items={languageList}
      onChange={onChange}
      iconSize={24}
      defaultSelected={languageItem}
    />
  );
}
