import { useContentContext } from '../../../../shared/providers/ContentProvider';
import { SectionButton } from '../SectionButton';
import { SectionsMenu } from './SectionsMenu';
import { Hider, SectionsWrapper } from './styles';

export function Content() {
  const {
    content: { navbar },
  } = useContentContext();

  const sections = Object.values(navbar);

  return (
    <Hider>
      <SectionsWrapper>
        {sections.map(({ label, id }) => (
          <SectionButton key={id} label={label} sectionId={id} />
        ))}
      </SectionsWrapper>
      <SectionsMenu sections={sections} />
    </Hider>
  );
}
