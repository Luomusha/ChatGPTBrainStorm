import { HTMLAttributes, PropsWithChildren } from "react"
import styles from "./styles.module.scss"

interface MyCardProps extends HTMLAttributes<HTMLButtonElement> {

}
export const MyCard = (props: PropsWithChildren<MyCardProps>) => {
    return <div className={styles.MyCard}>
        <img src={"./digital-person.png"} alt="" />
        <h3>
            落木沙
        </h3>
    </div>
}