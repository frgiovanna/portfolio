import { Introduction } from './sections/introduction';
import { FindMe } from './sections/find-me';
import { Interests } from './sections/interests';
import { Skills } from './sections/skills';
import { Contact } from './sections/contact';
import { Timeline } from './sections/timeline';
import { Projects } from './sections/projects';

import { createTheme, ThemeProvider } from '@mui/material';
import { theme } from './shared/theme';
import { Navbar } from './sections/navbar/Navbar';
import { ContentProvider } from './shared/providers/ContentProvider';

const customizedTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    primary: {
      main: theme.colors.morning,
    },
    secondary: {
      main: theme.colors.night,
    },
    info: {
      main: theme.colors.twilight,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customizedTheme}>
      <ContentProvider>
        <Navbar />
        <Introduction />
        <Timeline />
        <FindMe />
        <Interests />
        <Skills />
        <Projects />
        <Contact />
      </ContentProvider>
    </ThemeProvider>
  );
}

export default App;
