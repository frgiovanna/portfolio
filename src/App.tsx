import { Introduction } from './sections/introduction';
import { FindMe } from './sections/find-me';
import { Interests } from './sections/interests';
import { Skills } from './sections/skills';
import { Contact } from './sections/contact';
import { Projects } from './sections/projects';

function App() {
  return (
    <>
      <Introduction />
      <Projects/>
      <FindMe />
      <Interests />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
