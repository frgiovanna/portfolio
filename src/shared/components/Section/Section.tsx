import { useBreakpoints } from '../../hooks/useBreakpoints';
import { theme } from '../../theme';
import { Wrapper } from './styles';
import { Text } from '../Text';

interface SectionProps {
  title?: string;
  background: keyof typeof theme.colors;
  children: React.ReactNode;
}

export function Section({ background, title, children }: SectionProps) {
  const { isDesktop } = useBreakpoints();
  return (
    <Wrapper background={background}>
      {title && <Text variant={isDesktop ? 'Huge' : 'Large'}>{title}</Text>}
      {children}
    </Wrapper>
  );
}
