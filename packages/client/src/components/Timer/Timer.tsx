import React, { useState, useEffect, useRef } from 'react';
import SectionHeader, { Section } from '../Section/SectionHeader';
import SectionWrapper from '../Section/SectionWrapper';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css'
import PauseIcon from '../Icons/PauseIcon';
import RestartIcon from '../Icons/RestartIcon';
import OffIcon from '../Icons/OffIcon';

export function Timer() {
    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('break'); //work/break/null
    const [secondsLeft, setSecondsLeft] = useState(0);
    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function switchMode() {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? 25 : 5) * 60; //to change to use vars, add setting for timer
        setMode(nextMode);
        modeRef.current = nextMode;
        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;
    }

    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }

    function initTimer() {
        setSecondsLeft(25 * 60); //temp - add setting for setting timer
    }

    function toggleTimer(isPausedVal) {
        isPausedRef.current = isPausedVal;
        setIsPaused(isPausedVal);
    }

    useEffect( () => {
        initTimer();

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                console.log("paused")
                return;
            }
            if (secondsLeftRef.current === 0) {
                return switchMode();
            }

            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const totalSeconds = mode === 'work' ? 25 * 60 : 5 * 60;
    const percentage = Math.round(secondsLeft/totalSeconds) * 100;

    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    return (
        <SectionWrapper className='h-2/4'>
            <SectionHeader section={Section.Timer} title={"timer"} />
                { isPaused ? (
                    <div style={{ width: 190, height: 190, margin: '10% auto' }}>
                        <CircularProgressbarWithChildren
                            value={percentage} 
                            styles={buildStyles({
                                pathColor: `rgba(255, 240, 185, ${percentage / 100})`,
                                textColor: '#000000',
                            })}
                        >
                            <div style={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => toggleTimer(false) }>Start</div>
                        </CircularProgressbarWithChildren>
                    </div>
                ) : (
                <div className="grid-container">
                    <div className="grid-item">
                        <div>25m focus / 5m break</div>
                    </div>
                    <div className="grid-item">
                        <CircularProgressbarWithChildren
                            value={percentage} 
                            styles={buildStyles({
                                pathColor: `rgba(255, 240, 185, ${percentage / 100})`,
                                textColor: '#000000',
                            })}
                        >
                            <div style={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => toggleTimer(true) }>
                                {minutes} : {seconds < 10 ? `0 ${seconds}` : seconds }
                            </div>
                        </CircularProgressbarWithChildren>
                        <div className="button-container">
                            <div className="button-item">
                                <PauseIcon/>
                            </div>
                            <div className="button-item">
                                <RestartIcon/>
                            </div>
                            <div className="button-item">
                                <OffIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">Column 3</div>
                </div>

                )}
        </SectionWrapper>
    )
}
