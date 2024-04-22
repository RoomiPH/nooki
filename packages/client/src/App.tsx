import * as React from 'react'
import { AuthenticatedContextProvider } from './hooks/useAuthenticatedContext'
import { PlayersContextProvider } from './hooks/usePlayers'

import { VoiceChannelActivity } from './components/VoiceChannelActivity'
import GridBackground from './components/GridBackground'
import { Col, Row } from 'antd'
export default function App() {
    return (
        <AuthenticatedContextProvider>
            <PlayersContextProvider>
                {/* <GridBackground /> */}
                <Row>
                    <Col span={8}>
                        <Row></Row>
                        <Row></Row>
                        <Row></Row>
                    </Col>
                    <Col span={16}>
                        <Row></Row>
                    </Col>
                </Row>
                {/* <VoiceChannelActivity /> */}
            </PlayersContextProvider>
        </AuthenticatedContextProvider>
    )
}
