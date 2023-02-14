import Image from 'next/image'
import React, { InputHTMLAttributes, useRef } from 'react'
import CustomInput from '../CustomInput'

type ChatInputProps = {
    onClickSend?: (name: string, comment: string) => void
}

const ChatInput = ({ onClickSend }: ChatInputProps) => {

  const nameRef = useRef<InputHTMLAttributes<any>>();
  const commentRef = useRef<InputHTMLAttributes<any>>();

  const onClick = () => {
    const nameVal = nameRef.current?.value as string;
    const commentVal = commentRef.current?.value as string;

    if (nameVal && commentVal && nameVal.trim().length > 0 && commentVal.trim().length > 0) {
        onClickSend?.(nameVal, commentVal);
    }
  }

  return (
    <div className='grid grid-cols-6 gap-2 p-3'>
        <div className='col-span-5 grid grid-rows-2 gap-3'>
            <CustomInput placeholder='Nama' ref={nameRef} />
            <CustomInput placeholder='Ucapan' ref={commentRef} />
        </div>
        <button className='flex justify-center items-center focus:bg-transparent' role='button' onClick={onClick}>
            <span className='rounded-full p-1 bg-orange-100'>
            <Image 
                src={'/icons/chat-send.svg'} alt='send chat' width={40} height={40}/>
            </span>
        </button>
    </div>
  )
}

export default ChatInput