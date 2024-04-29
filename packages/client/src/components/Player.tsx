import * as React from 'react';
import { TPlayerOptions } from '../../../server/src/entities/Player';
import EmptyNookSVG from "../../src/images/deskEmpty.svg"
import Occupied1NookSVG from "../../src/images/deskOccupied1.svg"
import Occupied2NookSVG from "../../src/images/deskOccupied2.svg"
import Occupied3NookSVG from "../../src/images/deskOccupied3.svg"
import './Player.css';

export function Player({ avatarUri, name, talking }: TPlayerOptions) {
    return (
        <div className="player__container">
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
            <img className='player__desk' src={Occupied1NookSVG} width={100} height={'auto'}/>
            {/* <img className='player__desk' src={Occupied2NookSVG} width={100} height={'auto'}/> */}
            {/* <img className='player__desk' src={Occupied3NookSVG} width={100} height={'auto'}/> */}
            <div>{name}</div>
        </div>
    );
}
