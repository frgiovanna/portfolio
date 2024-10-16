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
      <AppBar sx={{ boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)' }}>
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
