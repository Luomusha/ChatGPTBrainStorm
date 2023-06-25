'use client'

import styles from './page.module.scss'
import { IconButton } from '@/components/IconButton'
import { MessageList } from '@/components/MessageList'
import { ConversationCard } from '@/components/ConversationCard'
import { MyCard } from '@/components/UserCard'
import { DialogTitle } from '@/components/DialogTitle'
import { DialogInput } from '@/components/DialogInput'
import { EmojiModel } from '@/components/EmojiModel'
import { useState, MouseEvent, useRef } from 'react'
import { MenuTab } from '@/components/MenuTab'
import { SearchInput } from '@/components/SearchInput'
import assert from "http-assert"
import { ContactCard } from '@/components/ContactCard'
import { ContactDetail } from '@/components/ContactDetail'
import { Contact, Conversation } from '../../../types'



export default function Home() {
  const [emojiShow, setEmojiShow] = useState(false)
  const [conversations, setConversation] = useState<Conversation[]>([{
    id: "contact-1"
  }, {
    id: "contact-2"
  }, {
    id: "contact-3"
  }, {
    id: "contact-4"
  }])

  const [contacts, setContacts] = useState<Contact[]>([{
    id: "contact-1",
    name: "小雯",
    signature: "产品经理",
    avatar: "profile.jpeg",
    gender: "female"
  }, {
    id: "contact-2",
    name: "李绝顶",
    signature: "资深开发",
    avatar: "li.jpeg",
    gender: "male"
  }, {
    id: "contact-2",
    name: "Nana",
    signature: "UI/UX设计总监",
    avatar: "ui.jpeg",
    gender: "male"
  },])
  const [contactIndex, setContactIndex] = useState(-1)

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
  const sendMessage = async () => {
    const dom = pre.current
    assert(dom)

    setMessages([...messages, {
      id: Math.random().toFixed(6).slice(2),
      data: dom.innerHTML,
      avatar: "./vercel.svg",
      name: "ChatGPT-4"
    }])

    dom.innerHTML = ""

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/event-stream'
      },
      body: JSON.stringify({
        "messages": 123
      })
    })
    assert(response.body)
    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader()
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      console.log('Received', value);
    }
  }
  return <>
    <div className={styles.FunctionalMenu}>
      <MyCard />
      <SearchInput />
      <MenuTab tabIndex={tabIndex} setTabIndex={setTabIndex}>
        {tabIndex === 0 && conversations.map(c => <ConversationCard key={c.id} />)}
        {tabIndex === 1 && contacts.map((c, index) => <ContactCard key={c.id}
          contact={c}
          index={index}
          onItemClick={setContactIndex} />)}
        {tabIndex === 2 && contacts.map(c => <div>123</div>)}
      </MenuTab>
    </div>

    <div className={styles.MainPanel}>
      {tabIndex === 0 && <div className={styles.DialogDetail}>
        <DialogTitle />
        <MessageList messages={messages} />
        <DialogInput onEmoji={() => setEmojiShow(true)}
          onSend={sendMessage} >
          <pre contentEditable={true} ref={pre} />
        </DialogInput>
      </div>}
      {tabIndex === 1 && <div className={styles.ContactDetail}>
        <DialogTitle />
        <ContactDetail contact={contacts[contactIndex]} />
      </div>}
    </div>

    {/* Emoji select model */}
    {emojiShow && <EmojiModel onSelect={onEmojiSelect} />}
  </>
}
