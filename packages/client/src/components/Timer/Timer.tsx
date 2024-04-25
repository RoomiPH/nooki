import React, { useState } from 'react';
import SectionHeader, { Section } from '../Section/SectionHeader';
import SectionWrapper from '../Section/SectionWrapper';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css'

export function Timer() {
    const [isPaused, setIsPaused] = useState(true);
    const percentage = 100;
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
                            <div style={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setIsPaused(false)}>Start</div>
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
                            <div style={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setIsPaused(false)}>Start</div>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div className="grid-item">Column 3</div>
                </div>

                )}
        </SectionWrapper>
    )
}
