import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconMenu } from '@shared/components/IconMenu';

interface SectionsMenuProps {
  sections: { label: string; id: string }[];
}

export function SectionsMenu({ sections }: SectionsMenuProps) {
  const menuItems = sections.map((section) => section.label);

  function onChange(item: string) {
    const section = sections.find(({ label }) => label === item);
    window.open(`#${section?.id}`, '_self');
  }

  return <IconMenu onChange={onChange} icon={MenuRoundedIcon} items={menuItems} iconSize={32} />;
}
