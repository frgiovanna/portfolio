import { useBreakpoints } from '../../../../shared/hooks/useBreakpoints';
import { SectionButton } from '../SectionButton';
import { SectionsWrapper } from './styles';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const sections = [
  { label: 'Introduction', id: 'introduction' },
  { label: 'Experiences', id: 'timeline' },
  { label: 'Find me', id: 'find-me' },
  { label: 'Interests', id: 'interests' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export function Content() {
  const { isDesktop } = useBreakpoints();

  if (isDesktop) {
    return (
      <SectionsWrapper>
        {sections.map(({ label, id }) => (
          <SectionButton key={id} label={label} sectionId={id} />
        ))}
      </SectionsWrapper>
    );
  }

  return <MenuRoundedIcon sx={{ fontSize: '42px' }} color="secondary" />;
}
