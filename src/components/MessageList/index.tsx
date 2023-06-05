import { HTMLAttributes, PropsWithChildren } from "react"
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
            <p>{props.data}</p>
        </div>
    </div>
}

export const MessageList = (props: MessageItemProps) => {
    return <div className={styles.ChatList}>
        {props.messages.map(m => <MessageItem {...m} />)}
    </div>
}