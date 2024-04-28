import { Button, Input, InputRef } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Checklist } from './Checklist';
import './styles.css';
import { useCallback, useRef, useState } from 'react';

export interface TodoItem {
    task: string;
    isChecked: boolean;
}
export interface TodoList {
    todo: TodoItem[];
}

export function sessionJsonParser(): TodoList {
    const todoList: string | null = sessionStorage.getItem('todo-list');
    const modifiedTodoList = todoList ? JSON.parse(todoList) : { todo: [] };
    return modifiedTodoList;
}

export function TodoContent() {
    const inputRef = useRef<InputRef>(null);
    const [todoTasks, setTodoTasks] = useState<TodoList>(sessionJsonParser());

    const onSubmitTodo = useCallback(() => {
        if (inputRef.current?.input?.value) {
            const newTask = {
                task: inputRef.current?.input?.value,
                isChecked: false,
            };

            setTodoTasks((prevList) => {
                const newTodoList: TodoList = {
                    todo: [
                        ...prevList.todo,
                        {
                            task: inputRef.current?.input?.value,
                            isChecked: false,
                        },
                    ],
                } as TodoList;

                sessionStorage.setItem(
                    'todo-list',
                    JSON.stringify(newTodoList)
                );
                return newTodoList;
            });
        } else {
            console.log('Please input a task');
        }
    }, []);

    return (
        <section className="flex flex-col w-full">
            <div className="flex gap-2 mt-4">
                <Input
                    placeholder="Enter todo item..."
                    id="todo-input"
                    variant="filled"
                    ref={inputRef}
                />
                <Button
                    type="primary"
                    className="bg-zinc-100 text-black"
                    icon={<PlusOutlined />}
                    size={'large'}
                    onClick={onSubmitTodo}
                />
            </div>
            <div className="mt-6">
                {todoTasks.todo.map((datum, index) => (
                    <Checklist
                        key={index + 1}
                        {...datum}
                        index={index}
                        setTodoTasks={setTodoTasks}
                    />
                ))}
            </div>
        </section>
    );
}
