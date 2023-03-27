import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import song from 'public/kau_kini_ada.mp3';

const FloatingMusicPlayer = () => {
    const [isSoundson, setIsSoundson] = useState(false);
    // const [play, { stop, pause }] = useSound(song, {
    //     onload: () => {
    //     },
    //     autoplay: true,
    //     volume: 0.3,
    // });

  return (
    <div className='fixed top-10 right-0 bg-orange-900 rounded-lg'>
        <div className='flex flex-col gap-1 relative p-2'>
            <button className='cursor-pointer p-2 bg-orange-50 rounded-md text-xs text-amber-700' onClick={() => play()}>
                Play
            </button>
            <button className='cursor-pointer p-2 bg-orange-50 rounded-md text-xs text-amber-700' onClick={() => pause()}>
                Pause
            </button>
            <button className='cursor-pointer p-2 bg-orange-50 rounded-md text-xs text-amber-700' onClick={() => stop()}>
                Stop
            </button>
            
            <button className='absolute top-0 rounded-full bg-neutral-50 text-xs w-5 h-5 ' style={{
                marginLeft: '-15px'
            }}>
                X
            </button>
        </div>
        {/* asdsa */}
    </div>
  )
}

export default FloatingMusicPlayer
