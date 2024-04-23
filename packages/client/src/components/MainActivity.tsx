import { Card, Col, Flex, Row } from 'antd'
import { Room } from './Room/Room'
export function MainActivity() {
    return (
        <Flex className='w-full' gap={1}>
            <Flex vertical className="p-2 h-screen w-1/3">
                <Card className="m-1 h-1/6">user row</Card>
                <Card className="m-1 h-2/6">timer row</Card>
                <Card className="m-1 h-2/6">todo row</Card>
                <Card className="m-1 h-1/6">music row</Card>
            </Flex>
            <Flex vertical className="p-2 h-screen w-2/3">
                <Room />
            </Flex>
        </Flex>
    )
}
