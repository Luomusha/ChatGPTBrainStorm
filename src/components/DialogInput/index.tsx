import { HTMLAttributes, PropsWithChildren } from "react"
import styles from "./styles.module.scss"
import { EmojiCard } from "../EmojiCard"

interface DialogInputProps {

}
export const DialogInput = (props: PropsWithChildren<DialogInputProps>) => {
    return <div className={styles.DialogInput}>
        <div className={styles.Tools}>
            <button>emji</button>
            <button>emji</button>
            <button>file</button>
        </div>
        {props.children}
        <pre contentEditable={true} />
        <div className={styles.Actions}>
            <span>按下Cmd+Enter换行</span>
            <button>发送</button>
        </div>
    </div>
}