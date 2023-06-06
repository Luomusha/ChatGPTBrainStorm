'use client'

import Image from 'next/image'
import styles from './page.module.scss'
import { IconButton } from '@/components/IconButton'
import { MessageList } from '@/components/MessageList'
import { ContactCard } from '@/components/ContactCard'
import { MyCard } from '@/components/UserCard'
import { DialogTitle } from '@/components/DialogTitle'
import { DialogInput } from '@/components/DialogInput'
import { EmojiModel } from '@/components/EmojiModel'
import { useState, MouseEvent } from 'react'

export default function Home() {
  const [emojiShow, setEmojiShow] = useState(false)
  const contacts = [{
    id: "contact-1"
  }, {
    id: "contact-2"
  }, {
    id: "contact-3"
  }, {
    id: "contact-4"
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

  const onEmojiSelect = (e: MouseEvent) => {
    const emoji = (e.target as HTMLElement).nodeName === "BUTTON"
    if (emoji) {
      console.log((e.target as HTMLElement).innerHTML)
    }
    setEmojiShow(false)
  }
  return <>
    <div className={styles.FunctionalMenu}>
      <MyCard />
      {contacts.map(c => <ContactCard key={c.id} />)}
    </div>
    <div className={styles.DialogDetail}>
      <DialogTitle />
      <MessageList messages={messages} />
      <DialogInput onEmoji={() => setEmojiShow(true)} />
    </div>
    {emojiShow && <EmojiModel onSelect={onEmojiSelect} />}
  </>
}
