import { theme } from '../../theme';
import { Wrapper } from './styles';
import { Text } from '../Text';
import { Container } from '../Container';
interface SectionProps {
  title?: string;
  background: keyof typeof theme.colors;
  children: React.ReactNode;
  id?: string;
}

export function Section({ background, title, children, id }: SectionProps) {
  return (
    <Wrapper background={background} id={id}>
      <Container>
        {title && <Text variant="Large">{title}</Text>}
        {children}
      </Container>
    </Wrapper>
  );
}
