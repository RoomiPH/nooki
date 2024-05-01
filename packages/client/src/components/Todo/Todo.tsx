import SectionHeader, { Section } from '../Section/SectionHeader';
import SectionWrapper from '../Section/SectionWrapper';
import { TodoContent } from './Content';

export function Todo() {
    return (
        <SectionWrapper className="h-2/5">
            <div>
                <SectionHeader section={Section.Todo} title={'to-do list'} />
                <TodoContent />
            </div>
        </SectionWrapper>
    );
}
