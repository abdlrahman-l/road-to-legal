import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import song from 'public/kau_kini_ada.mp3';
import Image from 'next/image';

import playIcon from 'public/icons/play.svg'
import pauseIcon from 'public/icons/pause.svg'
import stopIcon from 'public/icons/stop.svg'

const FloatingMusicPlayer = () => {
    const [isSoundson, setIsSoundson] = useState(true);
    const [play, { stop, pause, sound }] = useSound(song, {
        onload: () => {
            console.log('loaded')
        },
        autoplay: true,
        volume: 0.3,
        id: 'wedding-song',
    });

  const onClickPlay = () => {
    play();
    setIsSoundson(true)
  }

  const onClickPause = () => {
    pause();
    setIsSoundson(false)
  }

  const onClickStop = () => {
    stop();
    setIsSoundson(false)
  }

  useEffect(() => {

    return () => {
        onClickStop()
    }
  }, []);


  console.log({
    isSoundson
})
  return (
    <div className='fixed top-5 right-0 bg-orange-900 rounded-lg mr-1'>
        <div className='flex flex-col gap-1 relative p-2'>
            {
                !isSoundson && (
                    <button className='cursor-pointer p-2 bg-orange-50 rounded-md text-xs text-amber-700' onClick={onClickPlay}>
                        <Image
                            src={playIcon}
                            width={15}
                            height={15}
                            alt='play'
                        />
                    </button>
                )
            }
            {
                isSoundson && (
                    <button className='cursor-pointer p-2 bg-orange-50 rounded-md text-xs text-amber-700' onClick={onClickPause}>
                        <Image
                            src={pauseIcon}
                            width={15}
                            height={15}
                            alt='pause'
                        />
                    </button>
                )
            }
            
            {
                isSoundson && (
                    <button className='cursor-pointer p-2 bg-orange-50 rounded-md text-xs text-amber-700' onClick={onClickStop}>
                        <Image
                            src={stopIcon}
                            width={15}
                            height={15}
                            alt='stop'
                        />
                    </button>
                )
            }
            
            {/* <button className='absolute top-0 rounded-full bg-neutral-50 text-xs w-5 h-5 ' style={{
                marginLeft: '-15px'
            }}>
                X
            </button> */}
        </div>
    </div>
  )
}

export default FloatingMusicPlayer
