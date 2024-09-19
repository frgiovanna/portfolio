import { Container as MuiContainer } from '@mui/material';

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <MuiContainer
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        '@media (min-width: 1024px)': {
          gap: '54px',
        },
      }}
    >
      {children}
    </MuiContainer>
  );
}
