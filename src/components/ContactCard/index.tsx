import { HTMLAttributes, PropsWithChildren } from "react"
import styles from "./styles.module.scss"
import { Contact } from "../../../types"

interface ContactCardProps {
    contact: Contact,
    index: number,
    onItemClick: (index: number) => void
}
export const ContactCard = (props: PropsWithChildren<ContactCardProps>) => {
    return <div className={styles.ContactCard} onClick={() => props.onItemClick(props.index)}>
        <img src={props.contact.avatar} alt="" />
        <h4>{props.contact.name}</h4>
    </div>
}