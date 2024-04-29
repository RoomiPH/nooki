import React, { useState, useEffect, useRef } from 'react';
import SectionHeader, { Section } from '../Section/SectionHeader';
import SectionWrapper from '../Section/SectionWrapper';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css';
import useSound from 'use-sound';
import PauseIcon from '../Icons/PauseIcon';
import RestartIcon from '../Icons/RestartIcon';
import OffIcon from '../Icons/OffIcon';
import Switch from '../Switch/Switch';
import alarm from '../../sounds/alarm.mp3';
import PlayIcon from '../Icons/PlayIcon';
import Modal from '../Modal/Modal';
import ReminderIcon from '../Icons/ReminderIcon';
import ButtonWrapper from '../Button/Button';

export function Timer() {
    const [isPaused, setIsPaused] = useState(true);
    const [isOff, setIsOff] = useState(true);
    const [mode, setMode] = useState('break'); //types: work/break/null
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [focusedElapsedSeconds, setFocusElapsedSeconds] = useState(0);
    const [breakElapsedSeconds, setBreakElapsedSeconds] = useState(0);
    const [isStandReminderChecked, setIsStandReminderChecked] = useState(false);
    const [isDrinkReminderChecked, setIsDrinkReminderChecked] = useState(false);
    const [openStandReminder, setOpenStandReminder] = useState(false);
    const [openDrinkReminder, setOpenDrinkReminder] = useState(false);
    const [playAlarm] = useSound(alarm);

    const secondsLeftRef = useRef(secondsLeft);
    const focusedElapsedSecondsRef = useRef(focusedElapsedSeconds);
    const breakElapsedSecondsRef = useRef(breakElapsedSeconds);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    const toggleReminder = (type: string, nextChecked: any) => {
        if (type === 'stand') {
            setIsStandReminderChecked(!nextChecked);
        }
        else if (type === 'water') {
            setIsDrinkReminderChecked(!nextChecked);
        }
    };

    function switchMode() {
        playAlarm();
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? 25 : 5) * 60; //to change to use vars, add setting for timer
        setMode(nextMode);
        modeRef.current = nextMode;
        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;
    }

    function tick() {
        //Store focus elapsed time
        if(modeRef.current === 'work') {
            focusedElapsedSecondsRef.current++;
            setFocusElapsedSeconds(focusedElapsedSecondsRef.current);
        }

        //Store break elapsed time
        if(modeRef.current === 'break') {
            breakElapsedSecondsRef.current ++;
            setBreakElapsedSeconds(breakElapsedSecondsRef.current);
        }

        //Update seconds left
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }

    function initTimer() {
        setSecondsLeft(25 * 60); //temp - add setting for setting timer
    }

    function toggleTimer(isPausedVal: boolean) {
        isPausedRef.current = isPausedVal;
        setIsPaused(isPausedVal);
    }

    function handleReminderModal(type: string, isOpenVal: boolean) {
        if(type === "stand") {
            setOpenStandReminder(isOpenVal);
        }
        if(type === "drink") {
            setOpenDrinkReminder(isOpenVal);
        }
    }

    function convertToHourMinutesSeconds(secondsVal: number) {
        let hours = 0;
        let minutes = Math.floor(secondsVal / 60);

        if(minutes > 60) {
            hours = Math.floor(minutes / 60);
            minutes = minutes % 60;
        }

        const seconds = secondsVal % 60;

        return {
            hours,
            minutes,
            seconds
        }
    }

    function restart() {
        setFocusElapsedSeconds(0);
        setBreakElapsedSeconds(0);
        setMode('break');
        setSecondsLeft(0);
        isPausedRef.current = true;
        setIsPaused(isPausedRef.current);
    }

    useEffect( () => {
        initTimer();

        const timerInterval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                return switchMode();
            }

            tick();
        }, 1000);

        const standReminderInterval = setInterval(() => {
            if (isStandReminderChecked) {
                playAlarm();
                return handleReminderModal("stand", true);
            }
        }, 3600 * 1000);

        const drinkReminderInterval = setInterval(() => {
            if (isDrinkReminderChecked) {
                playAlarm();
                return handleReminderModal("drink", true);
            }
        }, 3600 * 1000);

        return () => {
            clearInterval(timerInterval),
            clearInterval(standReminderInterval),
            clearInterval(drinkReminderInterval)
        };
    }, [isStandReminderChecked, isDrinkReminderChecked, openDrinkReminder, openStandReminder]);

    const totalSeconds = mode === 'work' ? 25 * 60 : 5 * 60;
    const percentage = (secondsLeft/totalSeconds) * 100;

    const timerLeftTime = convertToHourMinutesSeconds(secondsLeft);
    const focusedElapsedTime = convertToHourMinutesSeconds(focusedElapsedSeconds);
    const breakElaspedTime = convertToHourMinutesSeconds(breakElapsedSeconds);

    return (
        <SectionWrapper className='h-2/4'>
            <SectionHeader section={Section.Timer} title={"timer"} />
                { isOff ? (
                    <div style={{ width: 190, height: 190, margin: '10% auto' }}>
                        <CircularProgressbarWithChildren
                            value={100} 
                            styles={buildStyles({
                                pathColor: `rgba(255, 240, 185, 1)`,
                                textColor: '#000000',
                            })}
                        >
                            <div style={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => {setIsOff(false); toggleTimer(false) }}>Start</div>
                        </CircularProgressbarWithChildren>
                    </div>
                ) : (
                <div className="grid-container">
                    <div className="grid-item">
                        <div className='timer-setting-label'>25m focus / 5m break</div>
                        <div className="elapsed-time-container">
                            <div className="elapsed-time-item">
                            <span className="focus-label">
                                focus
                            </span> 
                             <span className="focus-label">
                                {focusedElapsedTime.hours > 0 ? focusedElapsedTime.hours < 10 ? `0${focusedElapsedTime.hours}` : focusedElapsedTime.hours : ''}    {focusedElapsedTime.minutes} : {focusedElapsedTime.seconds < 10 ? `0${focusedElapsedTime.seconds}` : focusedElapsedTime.seconds }
                             </span>
                             </div>
                            <div className="elapsed-time-item">
                                <span className="break-label">
                                    breaks
                                </span> 
                                <span className="break-label">
                                    {breakElaspedTime.hours > 0 ? breakElaspedTime.hours < 10 ? `0${breakElaspedTime.hours}` : breakElaspedTime.hours : ''}    {breakElaspedTime.minutes} : {breakElaspedTime.seconds < 10 ? `0${breakElaspedTime.seconds}` : breakElaspedTime.seconds }
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <CircularProgressbarWithChildren
                            value={percentage} 
                            styles={buildStyles({
                                pathColor: `rgba(255, 240, 185, ${percentage})`,
                                textColor: '#000000',
                            })}
                        >
                            <div style={{ fontSize: '25px', cursor: 'pointer' }}>
                            {timerLeftTime.hours > 0 ? timerLeftTime.hours < 10 ? `0${timerLeftTime.hours}` : timerLeftTime.hours : ''}    {timerLeftTime.minutes} : {timerLeftTime.seconds < 10 ? `0${timerLeftTime.seconds}` : timerLeftTime.seconds }
                            </div>
                        </CircularProgressbarWithChildren>
                        <div className="button-container">
                            <div className="button-item">
                                { isPaused ? (
                                    <span className="pause-container" onClick={() => toggleTimer(true)}>
                                        <PauseIcon/>
                                    </span>
                                ) : (
                                    <span className="pause-container" onClick={() => toggleTimer(false)}>
                                        <PlayIcon/>
                                    </span>
                                )}
                            </div>
                            <div className="button-item" onClick={() => restart()}>
                                <RestartIcon/>
                            </div>
                            <div className="button-item" onClick={() => {restart(); setIsOff(true)}}>
                                <OffIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="reminder-container">
                            <div className="reminder-item">
                             <Switch
                             value={isStandReminderChecked}
                             onClick={() => toggleReminder("stand", isStandReminderChecked)}
                             />
                                <span style={{marginLeft: '25px'}}>Remind me to stand every hour</span>
                            </div>
                            <div className="reminder-item">
                                <Switch
                                value={isDrinkReminderChecked}
                                onClick={() => toggleReminder("water", isDrinkReminderChecked)}
                                />
                                <span style={{marginLeft: '25px'}}>Remind me to drink every 30 mins.</span>
                            </div>
                        </div>
                    </div>
                </div>

                )}
            <Modal isOpen={openStandReminder} hasCloseBtn={true} onClose={() => handleReminderModal("stand", false)}>
                <div className="m-2">
                    <div className="m-10 mx-20">
                        <div className="flex justify-center grid-cols-1">
                            <ReminderIcon/>
                        </div>
                        <div className="flex justify-center grid-cols-1 mt-2 ">
                            Time's Up!
                        </div>
                        <div className="flex justify-center grid-cols-1 mt-2 font-light">
                            Please stand up.
                        </div>
                        </div>
                    <div className="flex justify-end"> 
                    <ButtonWrapper onClick={() => handleReminderModal("stand", false)}>
                        <>
                            repeat
                        </>
                    </ButtonWrapper>
                    </div>
                </div>
            </Modal>
            <Modal isOpen={openDrinkReminder} hasCloseBtn={true} onClose={() => handleReminderModal("drink", false)}>
                <div className="m-2">
                    <div className="m-10 mx-20">
                        <div className="flex justify-center grid-cols-1">
                            <ReminderIcon/>
                        </div>
                        <div className="flex justify-center grid-cols-1 mt-2 ">
                            Time's Up!
                        </div>
                        <div className="flex justify-center grid-cols-1 mt-2 font-light">
                            Please drink your water.
                        </div>
                        </div>
                    <div className="flex justify-end"> 
                    <ButtonWrapper onClick={() => handleReminderModal("drink", false)}>
                        <>
                            repeat
                        </>
                    </ButtonWrapper>
                    </div>
                </div>
            </Modal>
        </SectionWrapper>
    )
}
