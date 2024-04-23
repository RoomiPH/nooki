import * as React from 'react'
import { AuthenticatedContextProvider } from './hooks/useAuthenticatedContext'
import { PlayersContextProvider } from './hooks/usePlayers'

import { VoiceChannelActivity } from './components/VoiceChannelActivity'
import { MainActivity } from './components/MainActivity'

export default function App() {
    // return (
    //     <AuthenticatedContextProvider>
    //         <PlayersContextProvider>
    //             <VoiceChannelActivity />
    //             <Todo />
    //         </PlayersContextProvider>
    //     </AuthenticatedContextProvider>
    // )
    return <MainActivity />
}
