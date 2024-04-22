import * as React from 'react'
import { AuthenticatedContextProvider } from './hooks/useAuthenticatedContext'
import { PlayersContextProvider } from './hooks/usePlayers'

import { VoiceChannelActivity } from './components/VoiceChannelActivity'
<<<<<<< HEAD
<<<<<<< HEAD
import { MainActivity } from './components/MainActivity'
import GridBackground from './components/GridBackground'
import { Col, Row } from 'antd'
=======
>>>>>>> 58717c5 (Revert "chore: install packages")
=======
import GridBackground from './components/GridBackground'
import { Col, Row } from 'antd'
>>>>>>> 74e779e (chore: install packages)
export default function App() {
    // return (
    //     <AuthenticatedContextProvider>
    //         <PlayersContextProvider>
    //             <VoiceChannelActivity />
    //         </PlayersContextProvider>
    //     </AuthenticatedContextProvider>
    // )
    return (
<<<<<<< HEAD
        <MainActivity />
=======
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
>>>>>>> 58717c5 (Revert "chore: install packages")
    )
}
