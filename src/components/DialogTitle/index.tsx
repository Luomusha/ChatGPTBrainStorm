import { HTMLAttributes, PropsWithChildren } from "react"
import styles from "./styles.module.scss"

interface DialogTitleProps extends HTMLAttributes<HTMLButtonElement> {

}
export const DialogTitle = (props: PropsWithChildren<DialogTitleProps>) => {
    return <div className={styles.DialogTitle}>
        ZZZ
    </div>
}