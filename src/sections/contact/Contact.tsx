import { Text } from '../../shared/components/Text';

import { Image, ContentWrapper, Wrapper } from './styles';
import { SocialMedia } from './components/SocialMedia';
import { Section } from '../../shared/components/Section';

export const Contact = () => {
  const socialMedia = [
    {
      image: '/png/social-media/linkedin.png',
      link: 'https://www.linkedin.com/in/frgiovanna/',
      title: 'LinkedIn',
      subtitle: 'linkedin.com/in/frgiovanna',
    },
    {
      image: '/png/social-media/github.png',
      link: 'https://github.com/frgiovanna',
      title: 'Github',
      subtitle: 'github.com/frgiovanna',
    },
    {
      image: '/png/social-media/email.png',
      link: 'mailto:giovannacnf@gmail.com',
      title: 'E-mail',
      subtitle: 'giovannacnf@gmail.com',
    },
  ];

  return (
    <Section background="fog" title="Contact" id="contact">
      <Wrapper>
        <ContentWrapper>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500saaaaaa.
          </Text>
          <ContentWrapper>
            {socialMedia.map((item) => (
              <SocialMedia key={item.image} {...item} />
            ))}
          </ContentWrapper>
        </ContentWrapper>
        <Image src="/png/avatar/waving-avatar.png" alt="waving avatar" />
      </Wrapper>
    </Section>
  );
};
