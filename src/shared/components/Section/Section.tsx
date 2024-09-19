import { theme } from '../../theme';
import { Wrapper } from './styles';
import { Text } from '../Text';
import { Container } from '../Container';
interface SectionProps {
  title?: string;
  background: keyof typeof theme.colors;
  children: React.ReactNode;
}

export function Section({ background, title, children }: SectionProps) {
  return (
    <Wrapper background={background}>
      <Container>
        {title && <Text variant="Large">{title}</Text>}
        {children}
      </Container>
    </Wrapper>
  );
}
