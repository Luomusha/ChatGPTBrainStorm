import Image from 'next/image'
import styles from './page.module.scss'
import { IconButton } from '@/components/IconButton'
import { MessageList } from '@/components/MessageList'
import { ContactCard } from '@/components/ContactCard'

export default function Home() {
  const messages = [{
    id: "1111-aaaa-bbbb-cccc",
    data: "你好",
    avatar: "./next.svg",
    name: "ChatGPT-4"
  }, {
    id: "2222-aaaa-bbbb-cccc",
    data: "你好",
    avatar: "./vercel.svg",
    name: "ChatGPT-4"
  },]
  return <>
    <div className={styles.FunctionalMenu}>
      <ContactCard />
    </div>
    <div className={styles.DialogDetail}>
      <IconButton title="afd">123</IconButton>
      <MessageList messages={messages} />
    </div>
  </>
}
