import Image from 'next/image'
import styles from './page.module.scss'
import { IconButton } from '@/components/IconButton'
import { MessageList } from '@/components/MessageList'
import { ContactCard } from '@/components/ContactCard'
import { MyCard } from '@/components/UserCard'
import { DialogTitle } from '@/components/DialogTitle'

export default function Home() {
  const contacts = [{

  }, {

  }, {

  }, {

  },]
  const messages = [{
    id: "1111-aaaa-bbbb-cccc",
    data: "你好",
    avatar: "./digital-person.png",
    name: "ChatGPT-4"
  }, {
    id: "2222-aaaa-bbbb-cccc",
    data: "你好",
    avatar: "./vercel.svg",
    name: "ChatGPT-4"
  },]
  return <>
    <div className={styles.FunctionalMenu}>
      <MyCard />
      {contacts.map(c => <ContactCard />)}
    </div>
    <div className={styles.DialogDetail}>
      <DialogTitle />
      <IconButton title="afd">123</IconButton>
      <MessageList messages={messages} />
    </div>
  </>
}
