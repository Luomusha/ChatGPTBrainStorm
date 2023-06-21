import { HTMLAttributes, PropsWithChildren } from "react"
import styles from "./styles.module.scss"

interface SearchInputProps extends HTMLAttributes<HTMLButtonElement> {

}

export const SearchInput = (props: PropsWithChildren<SearchInputProps>) => {
    return <div className={styles.SearchInput}>
        <img src="search.svg" alt="" />
        <input type="text" placeholder="搜索" />
    </div>
}