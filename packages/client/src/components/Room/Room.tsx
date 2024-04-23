import { Card, Col, Flex, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import RoomIcon from './RoomIcon'

export function Room() {
    return (
        <Card className="m-1 h-full bg-yellow-50">
            <Flex gap='small' align='center'>
                <RoomIcon />
                <Title level={5} className='m-0 p-0'>#voice-channel-name</Title>
            </Flex>
        </Card>
    )
}
