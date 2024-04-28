import * as React from 'react';
import { Checkbox } from 'antd';
import { TodoList } from './Content';

interface Props {
    task: string;
}

export const Checklist: React.FC<Props> = (props) => {
    const { task } = props;
    return (
        <div className="flex gap-3 mt-2.5 text-sm tracking-wider text-black round">
            <Checkbox>{task}</Checkbox>
        </div>
    );
};
