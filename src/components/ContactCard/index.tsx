import { HTMLAttributes, PropsWithChildren } from "react"
import styles from "./styles.module.scss"

interface ContactCardProps {

}
export const ContactCard = (props: PropsWithChildren<ContactCardProps>) => {
    return <div className={styles.ContactCard}>
        <img src="./next.svg" alt="" />
        <div className={styles.Context}>
            <div className={styles.Info}>
                <span>微信团队</span>
                <span>11:12</span>
            </div>
            <div>
                刚刚忘记去哪里了。
            </div>
        </div>
    </div>
}