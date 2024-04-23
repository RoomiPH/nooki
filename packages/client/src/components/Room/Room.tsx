import TextArea from 'antd/es/input/TextArea'
import SectionHeader, { Section } from '../Section/SectionHeader'
import SectionWrapper from '../Section/SectionWrapper'

export function Room() {
    return (
        <SectionWrapper className='h-full'>
            <SectionHeader section={Section.Room} title={"#voice-channel-name"} />
            <TextArea rows={4} />
        </SectionWrapper>
    )
}
