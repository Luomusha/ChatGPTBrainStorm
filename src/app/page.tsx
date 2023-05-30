import Image from 'next/image'
import styles from './page.module.scss'
import { IconButton } from '@/components/IconButton'
import { MessageList } from '@/components/MessageList'

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
  return <main className={styles.main}>
    <IconButton title="afd">123</IconButton>

    <MessageList messages={messages} />
  </main>
}
