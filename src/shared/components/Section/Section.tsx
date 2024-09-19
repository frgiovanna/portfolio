import { theme } from '../../theme';
import { Wrapper } from './styles';
import { Text } from '../Text';
import { Container } from '@mui/material';
interface SectionProps {
  title?: string;
  background: keyof typeof theme.colors;
  children: React.ReactNode;
}

export function Section({ background, title, children }: SectionProps) {
  return (
    <Wrapper background={background}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          '@media (min-width: 1024px)': {
            gap: '54px',
          },
        }}
      >
        {title && <Text variant="Large">{title}</Text>}
        {children}
      </Container>
    </Wrapper>
  );
}
