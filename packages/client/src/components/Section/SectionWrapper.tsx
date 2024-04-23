import { Card } from 'antd'
import classNames from 'classnames'
import { ReactElement } from 'react'

type Props = {
    children: JSX.Element | JSX.Element[]
    className?: string
}

const SectionWrapper = (props: Props): ReactElement => {
    return (
        <Card
            className={classNames(
                'm-1 bg-yellow-50 shadow shadow-gray-100 border-1 border-gray-200',
                props.className
            )}
            styles={{ body: { padding: '15px'} }}
        >
            {props.children}
        </Card>
    )
}

export default SectionWrapper
