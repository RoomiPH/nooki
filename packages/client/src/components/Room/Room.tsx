import TextArea from 'antd/es/input/TextArea'
import SectionHeader, { Section } from '../Section/SectionHeader'
import SectionWrapper from '../Section/SectionWrapper'
import { Card, Flex } from 'antd'

export function Room() {
    return (
        <SectionWrapper className="h-full">
            <SectionHeader
                section={Section.Room}
                title={'#voice-channel-name'}
            />
            <Flex className="w-full my-2" gap={2}>
                <Card
                    className="p-0 m-0 w-8/12"
                    styles={{ body: { padding: '0'} }}
                >
                    <TextArea
                        rows={2}
                        placeholder="Broadcast something to everyone"
                        styles={{ textarea: {fontSize: '11px'}}}
                    />
                </Card>
                <Card className="w-4/12" styles={{ body: { padding: '10px' } }}>
                    leaderboard
                </Card>
            </Flex>
        </SectionWrapper>
    )
}
