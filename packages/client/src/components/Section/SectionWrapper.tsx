import { Card } from "antd";
import classNames from "classnames";
import { ReactElement } from "react";

type Props = {
    children: ReactElement,
    className?: string
}

const SectionWrapper = (props: Props): ReactElement => {
    return (
        <Card className={classNames("m-1 bg-yellow-50", props.className)}>
            {props.children}
        </Card>
    )
}

export default SectionWrapper;
