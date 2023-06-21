'use client'

import styles from './page.module.scss'
import { IconButton } from '@/components/IconButton'
import { MessageList } from '@/components/MessageList'
import { ContactCard } from '@/components/ContactCard'
import { MyCard } from '@/components/UserCard'
import { DialogTitle } from '@/components/DialogTitle'
import { DialogInput } from '@/components/DialogInput'
import { EmojiModel } from '@/components/EmojiModel'
import { useState, MouseEvent, useRef } from 'react'
import { MenuTab } from '@/components/MenuTab'
import { SearchInput } from '@/components/SearchInput'
import assert from "http-assert"

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
  const defaultMsg = [{
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

  const [messages, setMessages] = useState(defaultMsg)
  const [tabIndex, setTabIndex] = useState(0)
  const [user, setUser] = useState()
  const pre = useRef<HTMLPreElement>(null)

  const onEmojiSelect = (e: MouseEvent) => {
    const emoji = (e.target as HTMLElement).nodeName === "BUTTON"
    if (emoji) {
      console.log((e.target as HTMLElement).innerHTML)
    }
    setEmojiShow(false)
  }
  const sendMessage = () => {
    const dom = pre.current
    assert(dom)

    setMessages([...messages, {
      id: Math.random().toFixed(6).slice(2),
      data: dom.innerHTML,
      avatar: "./vercel.svg",
      name: "ChatGPT-4"
    }])

    dom.innerHTML = ""
  }
  return <>
    <div className={styles.FunctionalMenu}>
      <MyCard />
      <SearchInput />
      <MenuTab tabIndex={tabIndex} setTabIndex={setTabIndex}>
        {tabIndex === 0 && contacts.map(c => <ContactCard key={c.id} />)}
        {tabIndex === 1 && contacts.map(c => <div>321</div>)}
        {tabIndex === 2 && contacts.map(c => <div>123</div>)}
      </MenuTab>
    </div>
    <div className={styles.DialogDetail}>
      <DialogTitle />
      <MessageList messages={messages} />
      <DialogInput onEmoji={() => setEmojiShow(true)}
        onSend={sendMessage} >
        <pre contentEditable={true} ref={pre} />
      </DialogInput>
    </div>
    {/* Emoji select model */}
    {emojiShow && <EmojiModel onSelect={onEmojiSelect} />}
  </>
}
