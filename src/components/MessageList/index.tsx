import { HTMLAttributes, PropsWithChildren, useEffect, useRef } from "react"
import styles from "./styles.module.scss"

interface Message {
    id: string
    data: string
    name: string
    avatar: string
}
interface MessageItemProps {
    messages: Message[]
}

const MessageItem = (props: Message) => {
    return <div className={styles.Message}>
        <div className={styles.UserInfo}>
            <img src={props.avatar} alt="user profile picture" />
        </div>
        <div className={styles.Data}>
            <h4>{props.name}</h4>
            <pre dangerouslySetInnerHTML={{ __html: props.data }}></pre>
        </div>
    </div >
}

export const MessageList = (props: MessageItemProps) => {
    const list = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!list) return
        if (!list.current) return
        list.current.scrollBy(0, 1000)
    }, [props.messages])
    return <div className={styles.ChatList} ref={list}>
        {props.messages.map(m => <MessageItem key={m.id} {...m} />)}
    </div>
}