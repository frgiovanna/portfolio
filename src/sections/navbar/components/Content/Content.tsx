import useMediaQuery from '@mui/material/useMediaQuery';
import { SectionButton } from '../SectionButton';
import { SectionsMenu } from './SectionsMenu';
import { SectionsWrapper } from './styles';

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
  const isDesktop = useMediaQuery('(min-width:1024px)');

  if (isDesktop) {
    return (
      <SectionsWrapper>
        {sections.map(({ label, id }) => (
          <SectionButton key={id} label={label} sectionId={id} />
        ))}
      </SectionsWrapper>
    );
  }

  return <SectionsMenu sections={sections} />;
}
