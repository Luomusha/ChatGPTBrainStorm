import { HTMLAttributes, PropsWithChildren } from "react"
import styles from "./styles.module.scss"

interface ContactCardProps {

}
export const ContactCard = (props: PropsWithChildren<ContactCardProps>) => {
    return <div className={styles.ContactCard}>
        <img src="./digital-person.png" alt="" />
        <h4>微信团队</h4>
    </div>
}