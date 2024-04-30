import { Flex } from 'antd';
import { Room } from './Room/Room';
import { Timer } from './Timer/Timer';
import { Todo } from './Todo/Todo';
import { WhiteNoise } from './WhiteNoise/WhiteNoise';

export function MainActivity() {
    return (
        <Flex className="w-full h-screen p-4">
            <Flex vertical className="w-1/3 h-full">
                {/* <Card className="m-1 h-1/6">user row</Card> */}
                <Timer />
                <Todo />
                <WhiteNoise />
            </Flex>
            <Flex vertical className="w-2/3 h-full">
                <Room />
            </Flex>
        </Flex>
    );
}
