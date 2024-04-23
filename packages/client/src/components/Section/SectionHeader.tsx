import { Flex } from 'antd'
import RoomIcon from '../Icons/RoomIcon'
import TimerIcon from '../Icons/TimerIcon'
import TodoIcon from '../Icons/TodoIcon'

export enum Section {
    Room = "Room",
    Timer = "Timer",
    Todo = "Todo",
    WhiteNoise = "WhiteNoise",
}

const Icon = {
    [Section.Room]: <RoomIcon />,
    [Section.Timer]: <TimerIcon />,
    [Section.Todo]: <TodoIcon />,
    [Section.WhiteNoise]: <TodoIcon />,
}

const SectionHeader = ({section, title} : {section: Section, title?: string}) => {
    return (
        <Flex gap="small" align="center">
            {Icon[section]}
            <h1>{title ? title : Section[section]}</h1>
        </Flex>
    )
}

export default SectionHeader;
