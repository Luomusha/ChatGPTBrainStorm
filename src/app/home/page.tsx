import Image from 'next/image'
import styles from './page.module.scss'
import { IconButton } from '@/components/IconButton'
import { MessageList } from '@/components/MessageList'
import { ContactCard } from '@/components/ContactCard'
import { MyCard } from '@/components/UserCard'
import { DialogTitle } from '@/components/DialogTitle'
import { DialogInput } from '@/components/DialogInput'
import { EmojiCard } from '@/components/EmojiCard'

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
    data: "你好.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, molestias! Natus et recusandae delectus incidunt eos odit dolores iste inventore. Delectus inventore modi sed dignissimos dolorem mollitia illo adipisci laborum.",
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
      <MessageList messages={messages} />
      <DialogInput >
        <EmojiCard />
      </DialogInput>
    </div>
  </>
}
