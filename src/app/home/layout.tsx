import { PropsWithChildren } from 'react'
import styles from "./layout.module.scss"
export default function RootLayout({ children }: PropsWithChildren) {
  return <main className={styles.Layout}>
    {children}
  </main>
}
