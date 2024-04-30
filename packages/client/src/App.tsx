import { AuthenticatedContextProvider } from './hooks/useAuthenticatedContext';
import { PlayersContextProvider } from './hooks/usePlayers';
import { MainActivity } from './components/MainActivity';

export default function App() {
    return (
        <AuthenticatedContextProvider>
            <PlayersContextProvider>
                <MainActivity />
            </PlayersContextProvider>
        </AuthenticatedContextProvider>
    )
}
