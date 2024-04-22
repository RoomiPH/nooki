import * as React from 'react'
import { Player } from './Player'
import { usePlayers } from '../hooks/usePlayers'
import './VoiceChannelActivity.css'
import Desk from './Desk'
import Nook from './Nook'

export function VoiceChannelActivity() {
    const players = usePlayers()

    return (
        <div className="voice__channel__container">
            {/* {players.map((p) => (
                <Nook key={p.userId} {...p} />
            ))} */}
        </div>
    )
}
