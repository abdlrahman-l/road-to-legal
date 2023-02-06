import classNames from 'classnames';
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import ChatBoxBubble from './ChatBoxBubble';
import classes from './index.module.scss';

const mockData = [
  {
    comment: 'Test comment panjang bat panjang akowdkoakwdokawodkoawko',
    name: 'Rahman'
  },
  {
    comment: 'Test comment 2 😊',
    name: 'Rahmanskuy'
  },
  {
    comment: 'Test comment 3',
    name: 'Yang terpatahkan'
  },
  {
    comment: 'Test comment 4',
    name: 'Mantan terindahmu'
  },
  {
    comment: 'Test comment 5',
    name: 'Abang tersayang'
  },
  {
    comment: 'Test comment 6',
    name: 'Rahman'
  },
  {
    comment: 'Test comment 7',
    name: 'Rahmanskuy'
  },
  {
    comment: 'Test comment 8',
    name: 'Yang terpatahkan'
  },
  {
    comment: 'Test comment 9',
    name: 'Mantan terindahmu'
  },
  {
    comment: 'Test comment 10',
    name: 'Abang tersayang'
  },
]

const ChatRoomBox = () => {
  return (
    <div className={classNames(classes.container, 'flex justify-center')}>
      <div className={classNames(classes['chat-room-wrap'])}>
        <div
          id="scrollableDiv"
          className={classNames(classes.list)}
        >
          {/*Put the scroll bar always on the bottom*/}
          <InfiniteScroll
            dataLength={mockData.length}
            next={() => {
              console.log('tapi boong')
            }}
            inverse={true} //
            hasMore={true}
            loader={null}
            scrollableTarget="scrollableDiv"
          >
            {[...mockData].map((props, index) => (
              <ChatBoxBubble className={classes.chips} index={index} {...props} />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  )
}

export default ChatRoomBox