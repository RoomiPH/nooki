import SectionHeader, { Section } from '../Section/SectionHeader';
import SectionWrapper from '../Section/SectionWrapper';
import { MusicPlayer } from './MusicPlayer';

export function WhiteNoise() {
    return (
        <SectionWrapper className="h-1/5">
            <div>
                <SectionHeader
                    section={Section.WhiteNoise}
                    title={'white noise'}
                />
                <MusicPlayer />
            </div>
        </SectionWrapper>
    );
}
