import { HTMLAttributes, PropsWithChildren } from "react"
import styles from "./styles.module.scss"

interface ContactCardProps {

}
export const ContactCard = (props: PropsWithChildren<ContactCardProps>) => {
    return <div className={styles.ContactCard}>
        <img src="./digital-person.png" alt="" />
        <div className={styles.Context}>
            <div className={styles.Info}>
                <h3>微信团队</h3>
                <span>11:12</span>
            </div>
            <div className={styles.Message}>
                刚刚忘记去哪里了。
            </div>
        </div>
    </div>
}