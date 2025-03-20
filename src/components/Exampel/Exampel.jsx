import { EXAMPLES } from '../../data';
import { useState } from 'react';
import TabButton from '../TabButton/TabButton'

export default function Exampel() {
    const [selecedTopic, setSelectedTopic] = useState();

    return (
        <section id='examples'>
            <h2>Exampels</h2>
            <menu>
                {Object.entries(EXAMPLES).map(([key, example]) => {
                    return (
                        <TabButton
                            key={key}
                            isSelected={selecedTopic === key}
                            onSelect={() => setSelectedTopic(key)}
                        >
                            {example.title}
                        </TabButton>
                    );
                })}
            </menu>
            {!selecedTopic && <p>Pleace select a topic</p>}
            {selecedTopic && (
                <div id='tab-content'>
                    <h3>{EXAMPLES[selecedTopic].title}</h3>
                    <p>{EXAMPLES[selecedTopic].description}</p>
                    <pre>
                        <code>{EXAMPLES[selecedTopic].code}</code>
                    </pre>
                </div>
            )}
        </section>
    );
}
