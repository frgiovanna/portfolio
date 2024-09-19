import { Wrapper } from './styles';

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Card({ children, onClick }: CardProps) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}
