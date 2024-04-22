import React from 'react'
import Desk from './Desk'
import { TPlayerOptions } from '../../../server/src/entities/Player'

export default function Nook({ avatarUri, name, talking }: TPlayerOptions) {
    return (
        <>
            <div
                className={`player__avatar ${talking ? 'player__avatar__talking' : ''}`}
            >
                <img
                    className="player__avatar__img"
                    src={avatarUri}
                    width="100%"
                    height="100%"
                />
            </div>
            <Desk />
            <div>{name}</div>
        </>
    )
}
