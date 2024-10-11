import { Section } from '@shared/components/Section';
import { useContentContext } from '@shared/providers/ContentProvider';
import { AlternatingTimeline } from './components/AlternatingTimeline/AlternatingTimeline';
import RightTimeline from './components/RightTimeline/RightTimeline';
import { Hider } from './styles';

export const Timeline = () => {
  const {
    content: { timeline, navbar },
  } = useContentContext();

  return (
    <Section background="fog" title={navbar.timeline.label} id={navbar.timeline.id}>
      <Hider>
        <AlternatingTimeline content={timeline.experiences} />
        <RightTimeline content={timeline.experiences} />
      </Hider>
    </Section>
  );
};
