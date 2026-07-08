import { useMemo } from 'react';
import { useContentContext } from '@shared/providers/ContentProvider';
import { useActiveSection } from '@shared/hooks';
import { SectionButton } from '../SectionButton';
import { SectionsMenu } from './SectionsMenu';
import { Hider, SectionsWrapper } from './styles';

export function Content() {
  const {
    content: { navbar },
  } = useContentContext();

  const sections = useMemo(
    () => [navbar.home, navbar.timeline, navbar.findMe, navbar.interests, navbar.skills, navbar.contact],
    [navbar],
  );
  const sectionIds = useMemo(() => sections.map(({ id }) => id), [sections]);
  const activeSection = useActiveSection(sectionIds);

  return (
    <Hider>
      <SectionsWrapper>
        {sections.map(({ label, id }) => (
          <SectionButton
            key={id}
            label={label}
            sectionId={id}
            href={id === navbar.home.id ? '#page-top' : undefined}
            isActive={activeSection === id}
          />
        ))}
      </SectionsWrapper>
      <SectionsMenu sections={sections} activeSection={activeSection} homeSectionId={navbar.home.id} />
    </Hider>
  );
}
