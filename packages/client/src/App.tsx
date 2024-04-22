import * as React from 'react'
import { AuthenticatedContextProvider } from './hooks/useAuthenticatedContext'
import { PlayersContextProvider } from './hooks/usePlayers'

import { VoiceChannelActivity } from './components/VoiceChannelActivity'
import { MainActivity } from './components/MainActivity'
import GridBackground from './components/GridBackground'
import { Col, Row } from 'antd'
export default function App() {
    // return (
    //     <AuthenticatedContextProvider>
    //         <PlayersContextProvider>
    //             <VoiceChannelActivity />
    //         </PlayersContextProvider>
    //     </AuthenticatedContextProvider>
    // )
    return (
        <MainActivity />
    )
}
