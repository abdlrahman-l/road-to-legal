import classNames from 'classnames'
import React, { Fragment } from 'react'
import classes from './ChatBoxBubble.module.scss'

const validURL = (str: string) => {
	try {
		return Boolean(new URL(str));
	} catch (e) {
		return false;
	}
};

const mutateTextMessage = (message: string) => {
	const escapeHtml = (text: string) => {
		const mapObj: any = {
			'&amp;': '&',
			'&lt;': '<',
			'&gt;': '>',
			'&quot;': '"',
		};

		return text.replace(/&amp;|&lt;|&gt;|&quot;/gi, function (matched) {
			return mapObj[matched];
		});
	};

	const finalMessage: any = escapeHtml(message)
		.split(' ')
		.map((m: any) => {
			if (validURL(m)) {
				if (m.indexOf('http://') == 0 || m.indexOf('https://') == 0) {
					return `<a href="${m}" rel="noopener noreferrer" target="_blank">${m}</a>`;
				} else {
					return `<a href="https://${m}" rel="noopener noreferrer" target="_blank">${m}</a>`;
				}
			}

			return m;
		});

	return finalMessage.join(' ').trim();
};

const ChatBoxBubble = ({ comment, name, index }: any) => {
  return (
    <div
        key={index}
        className={classNames(classes.bubble, {
            [classes['bubble-left']]: true,
            // [classes['bubble-right']]: item.username_real !== friendId,
        })}
    >
        <div className={classes.wrap}>
            <div
                className={classes['row-bubble-text']}
                dangerouslySetInnerHTML={{
                    __html: mutateTextMessage(comment),
                }}
            />
            <div className={classes.info}>
                {/* <Text className="fs-10 fs-md-12 text-neutral-9">{item.time}</Text>
                {item.username_real !== friendId && (
                    <Avatar size={16} className="ml-2" src={<IconStatus item={item} />} />
                )} */}
            </div>
        </div>
        {/* {item.status === 'failed' && (
            <p className={classes['failed-message']}> Sentuh pesan untuk kirim ulang</p>
        )} */}
        <span className={classes['sender-sign']} />
    </div>
  )
}

export default ChatBoxBubble