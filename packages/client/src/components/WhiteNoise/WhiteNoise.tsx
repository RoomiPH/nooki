import SectionHeader, { Section } from '../Section/SectionHeader';
import SectionWrapper from '../Section/SectionWrapper';

export function WhiteNoise() {
    return (
        <SectionWrapper className="h-1/6">
            <SectionHeader section={Section.WhiteNoise} title={'white noise'} />
        </SectionWrapper>
    );
}
