import {
    LeftOutlined,
    PauseCircleOutlined,
    PlayCircleOutlined,
    RightOutlined,
} from '@ant-design/icons';
import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { useAudioPlayer } from 'react-use-audio-player';
import music1 from '../../../assets/music/good-night-fassounds.mp3';
import music2 from '../../../assets/music/once-in-paris-pampupthemind.mp3';
import music3 from '../../../assets/music/tokyo-cafe-tvari.mp3';

const music = [
    {
        file: music1,
        title: 'Good Night - FASSounds',
        by: 'FASSounds',
    },
    {
        file: music2,
        title: 'Once In Paris - Pumpupthemind',
        by: 'Pumpupthemind',
    },
    {
        file: music3,
        title: 'Tokyo Cafe - TVARI',
        by: 'TVARI',
    },
];

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [musicIndex, setMusicIndex] = useState(0);
    const [currentlyPlaying, setCurrentlyPlaying] = useState(
        music[musicIndex].title
    );
    const { play, pause, load } = useAudioPlayer();

    useEffect(() => {
        music.forEach((sound) => {
            console.log(sound.title);
            load(sound.file, {
                onplay: () => setIsPlaying(true),
                onpause: () => setIsPlaying(false),
                onend: () => setMusicIndex(musicIndex + 1),
            });
        });
    }, [load]);

    useEffect(() => {
        load(music[musicIndex].file);

        if (isPlaying) play();

        setCurrentlyPlaying(music[musicIndex].title);
    }, [musicIndex]);

    const handleMusicChange = (action: string) => {
        const totalTracks = 3;
        let nextIndex =
            action === 'next'
                ? (musicIndex + 1) % totalTracks
                : (musicIndex - 1 + totalTracks) % totalTracks;
        setMusicIndex(nextIndex);
    };

    useEffect(() => {
        if (isPlaying) play();
        else if (!isPlaying) pause();
    }, [isPlaying, play, pause]);

    return (
        <div className="flex flex-col justify-center py-px text-sm tracking-wider text-black max-w-[408px]">
            <div className="flex gap-2.5 items-start">
                <div className="flex flex-row w-full mt-2.5">
                    <p className="w-3/12">{'Now playing: '}</p>
                    <div className="w-9/12">
                        <Marquee>{currentlyPlaying}</Marquee>
                    </div>
                </div>
            </div>
            <div className="self-center mt-5 mb-3 max-w-full">
                <LeftOutlined
                    className="mx-2 transition ease-in-out delay-150 hover:-translate-1 hover:scale-125 duration-300"
                    style={{ fontSize: '25px' }}
                    onClick={() => handleMusicChange('previous')}
                />
                {isPlaying && (
                    <PauseCircleOutlined
                        className="mx-2 transition ease-in-out delay-150 hover:-translate-1 hover:scale-125 duration-300"
                        onClick={() => {
                            setIsPlaying(false);
                        }}
                        style={{ fontSize: '25px' }}
                    />
                )}
                {!isPlaying && (
                    <PlayCircleOutlined
                        className="mx-2 transition ease-in-out delay-150 hover:-translate-1 hover:scale-125 duration-300"
                        onClick={() => {
                            setIsPlaying(true);
                        }}
                        style={{ fontSize: '25px' }}
                    />
                )}
                <RightOutlined
                    className="mx-2 transition ease-in-out delay-150 hover:-translate-1 hover:scale-125 duration-300"
                    style={{ fontSize: '25px' }}
                    onClick={() => handleMusicChange('next')}
                />
            </div>
        </div>
    );
}
