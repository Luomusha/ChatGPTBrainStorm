import { HTMLAttributes, PropsWithChildren } from "react"
import styles from "./styles.module.scss"
import { Contact } from "../../../types"

interface ContactDetailProps {
    contact: Contact
}
export const ContactDetail = (props: PropsWithChildren<ContactDetailProps>) => {
    return <div className={styles.ContactDetail}>
        <img src={props.contact?.avatar} alt="" />
        <h4>{props.contact?.name}</h4>
        <div>{props.contact?.signature}</div>
        <button>发送消息</button>
    </div>
}