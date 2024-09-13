import { useBreakpoints } from '../../shared/hooks/useBreakpoints';
import { Text } from '../../shared/components/Text';
import { Wrapper } from './styles';
import { AlternatingTimeline } from './components/AlternatingTimeline/AlternatingTimeline';
import RightTimeline from './components/RightTimeline/RightTimeline';

export const Timeline = () => {
  const { isDesktop } = useBreakpoints();

  const mockedContent = [
    {
      title: 'Ismart online (2013 - 2015)',
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
    },
    {
      title: 'Ismart online (2013 - 2015)',
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
    },
    {
      title: 'Ismart online (2013 - 2015)',
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
    },
    {
      title: 'Ismart online (2013 - 2015)',
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
    },
    {
      title: 'Ismart online (2013 - 2015)',
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
    },
  ];

  return (
    <Wrapper>
      <Text variant={isDesktop ? 'Huge' : 'Large'}>Timeline</Text>
      {isDesktop ? <AlternatingTimeline content={mockedContent} /> : <RightTimeline content={mockedContent} />}
    </Wrapper>
  );
};
