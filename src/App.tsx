import { Introduction } from './sections/introduction';
import { FindMe } from './sections/find-me';
import { Interests } from './sections/interests';
import { Skills } from './sections/skills';
import { Contact } from './sections/contact';
import { Timeline } from './sections/timeline';

function App() {
  return (
    <>
      <Introduction />
      <Timeline />
      <FindMe />
      <Interests />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
