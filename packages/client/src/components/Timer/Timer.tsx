import SectionHeader, { Section } from '../Section/SectionHeader';
import SectionWrapper from '../Section/SectionWrapper';

export function Timer() {
    return (
        <SectionWrapper className="h-full">
            <SectionHeader section={Section.Timer} title={'timer'} />
        </SectionWrapper>
    );
}
