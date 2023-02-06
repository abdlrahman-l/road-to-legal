import classNames from 'classnames'
import React from 'react'
import ChatInput from '../ChatInput'
import ChatRoomBox from '../ChatRoomBox'
import classes from './index.module.scss';

const Chat = () => {
  return (
    <div className={classNames('shadow-md rounded-lg m-2 overflow-hidden', classes['chat-container'])}>
        <ChatRoomBox />
        <ChatInput />
    </div>
  )
}

export default Chat