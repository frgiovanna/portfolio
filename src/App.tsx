import { Introduction } from './sections/introduction';
import { FindMe } from './sections/find-me';
import { Interests } from './sections/interests';
import { Skills } from './sections/skills';
import { Contact } from './sections/contact';
import { Timeline } from './sections/timeline';
import { Projects } from './sections/projects';

import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Introduction />
      <Timeline />
      <FindMe />
      <Interests />
      <Skills />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
