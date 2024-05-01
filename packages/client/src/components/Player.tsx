import * as React from 'react';
import { TPlayerOptions } from '../../../server/src/entities/Player';
import EmptyNookSVG from "../../src/images/deskEmpty.svg"
import Occupied1NookSVG from "../../src/images/deskOccupied1.svg"
import Occupied2NookSVG from "../../src/images/deskOccupied2.svg"
import Occupied3NookSVG from "../../src/images/deskOccupied3.svg"
import './Player.css';

export function Player({ avatarUri, name, talking, joinedAt }: TPlayerOptions) {
    const [elapsedTime, setElapsedTime] = React.useState('');
    const [deskDesign, setDeskDesign] = React.useState('');

    React.useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = new Date();
            const joinedTime = new Date(joinedAt);

            const elapsedMilliseconds = currentTime.getTime() - joinedTime.getTime();
            
            const hours = Math.floor(elapsedMilliseconds / (1000 * 60 * 60));
            const minutes = Math.floor((elapsedMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((elapsedMilliseconds % (1000 * 60)) / 1000);
            
            const formattedElapsedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            setElapsedTime(formattedElapsedTime);

            if (hours >= 3) {
                setDeskDesign(Occupied3NookSVG);
            } else if (hours >= 1) {
                setDeskDesign(Occupied2NookSVG);
            } else {
                setDeskDesign(Occupied1NookSVG);
            }
        }, 1000);
        
        return () => clearInterval(timer);
    }, [joinedAt]);

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
            <img className='player__desk' src={deskDesign} width={100} height={'auto'}/>
            <div className='text-sm'>{name}</div>
            <div className='text-gray-500'>{elapsedTime}</div>
        </div>
    );
}
