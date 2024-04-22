import { Col, Row } from 'antd'
export function MainActivity() {
    return (
        <Row className="w-full h-full">
            <Col span={6} className="bg-slate-200">
                <Row gutter={[8, 8]}>
                    <Col span={24} className='bg-red-100 flex'>user row</Col>
                    <Col span={24} className='bg-red-200'>timer row</Col>
                    <Col span={24} className='bg-red-300'>todo row</Col>
                    <Col span={24} className='bg-red-400'>music row</Col>
                </Row>
            </Col>
            <Col span={18} className="bg-slate-500 h-full">
                main room
            </Col>
        </Row>
    )
}
