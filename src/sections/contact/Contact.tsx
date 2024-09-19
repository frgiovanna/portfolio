import { Text } from '../../shared/components/Text';

import { Image, ContentWrapper, SocialMediaWrapper } from './styles';
import { SocialMedia } from './components/SocialMedia';
import { Section } from '../../shared/components/Section';

export const Contact = () => {
  const socialMedia = [
    {
      image: '/svg/social-media/linkedin.svg',
      link: 'https://www.linkedin.com/in/frgiovanna/',
      title: 'LinkedIn',
      subtitle: 'linkedin.com/in/frgiovanna',
    },
    {
      image: '/svg/social-media/github.svg',
      link: 'https://github.com/frgiovanna',
      title: 'Github',
      subtitle: 'github.com/frgiovanna',
    },
    {
      image: '/svg/social-media/email.svg',
      link: 'mailto:giovannacnf@gmail.com',
      title: 'E-mail',
      subtitle: 'giovannacnf@gmail.com',
    },
  ];

  return (
    <Section background="fog" title="Contact">
      <ContentWrapper>
        <div>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500saaaaaa.
          </Text>
          <SocialMediaWrapper>
            {socialMedia.map((item) => (
              <SocialMedia key={item.image} {...item} />
            ))}
          </SocialMediaWrapper>
        </div>
        <Image src="/svg/waving-avatar.svg" alt="waving avatar" />
      </ContentWrapper>
    </Section>
  );
};
