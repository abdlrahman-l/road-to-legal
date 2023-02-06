import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import ChatBoxBubble from './ChatBoxBubble';
import classes from './index.module.scss';

const mockData = [
  {
    comment: 'Selamat ya manssss 😊',
    name: 'Rahman'
  },
  {
    comment: 'Selamat ya nov 😊',
    name: 'Rahmanskuy'
  },
  {
    comment: 'Semoga samawa guys',
    name: 'Yang terpatahkan'
  },
  {
    comment: 'Selamattt rahmannnn',
    name: 'Mantan terindahmu'
  },
  {
    comment: 'Selamat ya tyaaa',
    name: 'Abang tersayang'
  },
  {
    comment: 'Selamat ya manssss 😊',
    name: 'Rahman'
  },
  {
    comment: 'Selamat ya nov 😊',
    name: 'Rahmanskuy'
  },
  {
    comment: 'Semoga samawa guys',
    name: 'Yang terpatahkan'
  },
  {
    comment: 'Selamattt rahmannnn',
    name: 'Mantan terindahmu'
  },
  {
    comment: 'Selamat ya tyaaa',
    name: 'Abang tersayang'
  },
  
]

const ChatRoomBox = () => {
  console.log('checkk', classes)
  return (
    <div className={classes['chat-room-wrap']}>
      <div
        id="scrollableDiv"
        className={classes.list}
      >
        {/*Put the scroll bar always on the bottom*/}
        <InfiniteScroll
          dataLength={mockData.length}
          next={() => {
            console.log('tapi boong')
          }}
          inverse={true} //
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {[...mockData].map((props, index) => (
            <ChatBoxBubble className={classes.chips} index={index} {...props} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default ChatRoomBox