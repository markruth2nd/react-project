import { useState } from 'react';

import { CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';


    
function App() {
  const [ selectedTopic, setSelectedTopic] = useState( );

  // let tabContent = 'Please click a button';

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
}

let tabContent = <p>Please select a topic.</p>;

if (selectedTopic) {
  tabContent = (
    <div id='tab-content'>
      <h3>
        {EXAMPLES[selectedTopic].title}
      </h3>
      <p>
        {EXAMPLES[selectedTopic].description}
      </p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  );
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} key={conceptItem.title} />)}
          {/* <CoreConcept 
          title={"test"}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} /> */}
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}
              onClick={() => handleClick('components')} >Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}
            onClick={() => handleClick('jsx')} >JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
            onClick={() => handleClick('props')} >Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
            onClick={() => handleClick('state')} >State</TabButton>
          </menu>
            {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
