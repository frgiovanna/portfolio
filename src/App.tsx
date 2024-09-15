import { Introduction } from './sections/introduction';
import { FindMe } from './sections/find-me';
import { Interests } from './sections/interests';
import { Skills } from './sections/skills';
import { Contact } from './sections/contact';
import { Timeline } from './sections/timeline';
import { Projects } from './sections/projects/Projects';

function App() {
  return (
    <>
      <Introduction />
      <Timeline />
      <FindMe />
      <Interests />
      <Skills />
      <Projects/>
      <Contact />
    </>
  );
}

export default App;
