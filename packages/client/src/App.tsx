import * as React from 'react'
import { AuthenticatedContextProvider } from './hooks/useAuthenticatedContext'
import { PlayersContextProvider } from './hooks/usePlayers'

import { VoiceChannelActivity } from './components/VoiceChannelActivity'
<<<<<<< HEAD
import { MainActivity } from './components/MainActivity'
import GridBackground from './components/GridBackground'
import { Col, Row } from 'antd'
=======
>>>>>>> 58717c5 (Revert "chore: install packages")
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
                <VoiceChannelActivity />
            </PlayersContextProvider>
        </AuthenticatedContextProvider>
>>>>>>> 58717c5 (Revert "chore: install packages")
    )
}
