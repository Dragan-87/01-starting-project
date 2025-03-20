import {EXAMPLES} from '../../data';
import {useState} from 'react';
import TabButton from '../TabButton/TabButton';
import Section from '../Section/Section';
import Tabs from '../Tabs/Tabs';

export default function Example() {
    const [selectedTopic, setSelectedTopic] = useState();
    let content = <p>Please select a topic</p>;
    if (selectedTopic) {
        content = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section id='examples' title='Examples'>
            <Tabs
                ButtonsContainer='menu'
                buttons={Object.entries(EXAMPLES).map(([key, example]) => {
                    return (
                        <TabButton
                            key={key}
                            isSelected={selectedTopic === key}
                            onClick={() => setSelectedTopic(key)}
                        >
                            {example.title}
                        </TabButton>
                    );
                })}
            >
                {content}
            </Tabs>
        </Section>
    );
}
