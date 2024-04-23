import * as React from 'react'
import { Button, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

interface TodoItemProps {
    text: string
    iconSrc: string
}

const TodoItem: React.FC<TodoItemProps> = ({ text, iconSrc }) => (
    <div className="flex gap-3 mt-2.5 text-sm tracking-wider text-black">
        <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="shrink-0 aspect-square w-[18px]"
        />
        <div className="flex-auto">{text}</div>
    </div>
)

const todoItems = [
    {
        text: 'finish activity 3.2',
        iconSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/ff9066aa490888b893fadb8d3cc7ae94d282d4f55c0bf4f9bfb0762debd3caa0?apiKey=59d88a1833634011b65c35ae0d649e90&',
    },
    {
        text: 'start working on English essay',
        iconSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/61a43911bc852a539535a69f6df11a0a6aebd9f127165e911733f09104690af1?apiKey=59d88a1833634011b65c35ae0d649e90&',
    },
    {
        text: 'answer math problems',
        iconSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/0bb4de1ffc9c1d09738735426b13ac5f27e43a17a0ab3878b7b241776895d4ae?apiKey=59d88a1833634011b65c35ae0d649e90&',
    },
    {
        text: 'submit physics activity 12.3 in pdf',
        iconSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/4368663bbe8c0d5942981bcae728b0d1ff0dd6631b87e5033329053a645d85c5?apiKey=59d88a1833634011b65c35ae0d649e90&',
    },
    {
        text: 'answer physics activty 12.3',
        iconSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/5929da3c2fc6a6f3439de3317322646913574e7a53c9bd5ff0ce27900bc57ae5?apiKey=59d88a1833634011b65c35ae0d649e90&',
    },
]

export const Todo: React.FC = () => {
    return (
        <section className="flex flex-col w-full">
            <header className="flex gap-2.5 self-start text-base font-bold tracking-wider text-black">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c635e1c7b114c17e6f0ab992e101a9abafa858ef9ed2d78ef20b554f883e754a?apiKey=59d88a1833634011b65c35ae0d649e90&"
                    alt=""
                    className="shrink-0 w-8 aspect-square"
                />
                <h1 className="my-auto">to-do list</h1>
            </header>
            <div className="flex gap-2 mt-4">
                <Input placeholder="Enter todo item..." variant="filled" />
                <Button
                    type="primary"
                    className="bg-zinc-100 text-black"
                    icon={<PlusOutlined />}
                    size={'large'}
                />
                {/* <button
                    type="submit"
                    aria-label="Add to-do item"
                    className="w-[20%]"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/543af045c387656890179025ff9a6048030259a008cd26d1fed38deeff8ab646?apiKey=59d88a1833634011b65c35ae0d649e90&"
                        alt=""
                        className="shrink-0 rounded-md aspect-[1.05] w-[41px]"
                    />
                </button> */}
            </div>
            <div className="mt-6">
                {todoItems.map((item, index) => (
                    <TodoItem
                        key={index}
                        text={item.text}
                        iconSrc={item.iconSrc}
                    />
                ))}
            </div>
        </section>
    )
}
