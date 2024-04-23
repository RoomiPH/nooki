import * as React from 'react'
import { Checkbox } from 'antd'

interface Props {
    text: string
    iconSrc: string
}

export const Checklist: React.FC<Props> = ({ text, iconSrc }) => (
    <div className="flex gap-3 mt-2.5 text-sm tracking-wider text-black round">
        {/* <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="shrink-0 aspect-square w-[18px]"
        />
        <div className="flex-auto">{text}</div> */}
        <Checkbox>This is a checkbox</Checkbox>
    </div>
)
