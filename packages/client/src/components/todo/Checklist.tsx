import * as React from 'react'
import { Checkbox } from 'antd'

export const Checklist: React.FC = () => (
    <div className="flex gap-3 mt-2.5 text-sm tracking-wider text-black round">
        <Checkbox>This is a checkbox</Checkbox>
    </div>
)
