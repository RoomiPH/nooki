import { Checkbox } from 'antd';
import { TodoList } from './Content';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface Props {
    index: number;
    task: string;
    isChecked: boolean;
    setTodoTasks: Dispatch<SetStateAction<TodoList>>;
}

export function Checklist(props: Props) {
    const { index, task, isChecked, setTodoTasks } = props;
    const [isFinished, setIsFinished] = useState(isChecked);

    const handleOnChange = useCallback((event: CheckboxChangeEvent) => {
        setIsFinished(event.target.checked);
        setTodoTasks((prevList: TodoList) => {
            const modifiedTodoList: TodoList = prevList;
            modifiedTodoList.todo[index].isChecked = event.target.checked;
            const newTodoList: TodoList = {
                todo: [...modifiedTodoList.todo],
            } as TodoList;

            sessionStorage.setItem('todo-list', JSON.stringify(newTodoList));
            return newTodoList;
        });
    }, []);

    return (
        <div className="flex gap-3 mt-2.5 text-sm tracking-wider text-black round">
            <Checkbox
                onChange={handleOnChange}
                checked={isChecked}
                style={isFinished ? { textDecoration: 'line-through' } : {}}
            >
                {task}
            </Checkbox>
        </div>
    );
}
