import TextArea from 'antd/es/input/TextArea'
import SectionHeader, { Section } from '../Section/SectionHeader'
import SectionWrapper from '../Section/SectionWrapper'
import { Card, Col, Flex, Row } from 'antd'
import EmptyNookSVG from "../../images/deskEmpty.svg"
import Occupied1NookSVG from "../../images/deskOccupied1.svg"
import Occupied2NookSVG from "../../images/deskOccupied2.svg"
import Occupied3NookSVG from "../../images/deskOccupied3.svg"
import { usePlayers } from '../../hooks/usePlayers'
import { Player } from '../Player'
import { Content } from 'antd/es/layout/layout'

export function Room() {
    const players = usePlayers();

    return (
        <SectionWrapper className='h-full'>
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
            <Content className='overflow-y-auto overflow-x-hidden scroll-smooth mt-8' style={{height: '75vh'}}>
                <Row gutter={[8, 48]}>
                    { players.map((p) => (
                        <Col span={4}>
                            <Player key={p.userId} {...p} />
                        </Col>
                    ))}
                </Row>
            </Content>
        </SectionWrapper>
    )
}