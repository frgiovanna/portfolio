import AppBar from '@mui/material/AppBar';
import { Container } from '@shared/components/Container';
import { useScrollTrigger, Slide } from '@mui/material';
import { Toolbar } from './styles';
import { Avatar } from './components/Avatar';
import { Content } from './components/Content';
import { LanguageSwitch } from './components/LanguageSwitch';

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export function Navbar() {
  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          color: 'inherit',
        }}
      >
        <Container>
          <Toolbar>
            <div id="avatar">
              <Avatar />
            </div>

            <div id="sections">
              <Content />
            </div>

            <div id="languages">
              <LanguageSwitch />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
