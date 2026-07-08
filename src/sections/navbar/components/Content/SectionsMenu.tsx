import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconMenu } from '@shared/components/IconMenu';

interface SectionsMenuProps {
  activeSection: string;
  homeSectionId: string;
  sections: { label: string; id: string }[];
}

export function SectionsMenu({ activeSection, homeSectionId, sections }: SectionsMenuProps) {
  const menuItems = sections.map((section) => section.label);
  const selectedLabel = sections.find(({ id }) => id === activeSection)?.label;

  function onChange(item: string) {
    const section = sections.find(({ label }) => label === item);
    window.open(section?.id === homeSectionId ? '#page-top' : `#${section?.id}`, '_self');
  }

  return (
    <IconMenu
      onChange={onChange}
      icon={MenuRoundedIcon}
      items={menuItems}
      iconSize={32}
      defaultSelected={selectedLabel}
    />
  );
}
