import { Card, Col, Flex, Row } from 'antd'
import { Todo } from './todo/Todo'

export function MainActivity() {
    return (
        <Flex className="w-full">
            <Flex vertical className="p-2 h-screen w-1/3">
                <Card className="m-1 h-1/6">user row</Card>
                <Card className="m-1 h-2/4">timer row</Card>
                <Card className="m-1 h-2/4 rounded-lg border border-solid shadow-lg bg-stone-50 border-stone-300 max-md:px-5">
                    <Todo />
                </Card>
                <Card className="m-1 h-1/6">music row</Card>
            </Flex>
            <Flex vertical className="p-2 h-screen w-2/3">
                <Card className="m-1 h-full">main activity space</Card>
            </Flex>
        </Flex>
    )
}
