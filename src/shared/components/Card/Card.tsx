import { Wrapper } from './styles';

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  shadow?: boolean;
}

export function Card({ children, onClick, shadow = true }: CardProps) {
  return (
    <Wrapper shadow={Boolean(shadow)} onClick={onClick}>
      {children}
    </Wrapper>
  );
}
