import LanguageIcon from '@mui/icons-material/Language';
import { IconMenu } from '../../../../shared/components/IconMenu';

export function LanguageSwitch() {
  const languages = ['pt-BR', 'en-US'];

  function onChange(language: string) {
    console.log(language);
  }

  return <IconMenu icon={LanguageIcon} items={languages} onChange={onChange} iconSize={24} defaultSelected="pt-BR" />;
}
