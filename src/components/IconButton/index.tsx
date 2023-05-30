import { HTMLAttributes, PropsWithChildren } from "react"
import styles from "./styles.module.scss"

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {

}
export const IconButton = (props: PropsWithChildren<IconButtonProps>) => {
    return <button className={styles.IconButton} {...props}> {props.children}</button >
}