import CoreConcept from '../CoreConcept/CoreConcept';
import { CORE_CONCEPTS } from '../../data';
import './CoreConcept.css';

export default function CoreConcepts() {
    return (
        <section id='core-concepts'>
            <h2>Time to get started!</h2>
            <ul>
                {CORE_CONCEPTS.map((item, index) => {
                    return <CoreConcept key={index} {...item} />;
                })}
            </ul>
        </section>
    );
}
