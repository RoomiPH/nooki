import SectionHeader, { Section } from '../Section/SectionHeader'
import SectionWrapper from '../Section/SectionWrapper'

export function Todo() {
    return (
        <SectionWrapper className='h-2/4'>
            <SectionHeader section={Section.Todo} title={"to-do list"} />
        </SectionWrapper>
    )
}
