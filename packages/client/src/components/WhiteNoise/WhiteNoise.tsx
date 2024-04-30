import SectionHeader, { Section } from '../Section/SectionHeader';
import SectionWrapper from '../Section/SectionWrapper';
import { Spotify } from './Spotify';

export function WhiteNoise() {
    return (
        <SectionWrapper className="h-1/5">
            <div>
                <SectionHeader
                    section={Section.WhiteNoise}
                    title={'white noise'}
                />
                <Spotify />
            </div>
        </SectionWrapper>
    );
}
