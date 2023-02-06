import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Row, Column } from '@manskuy/grid'
import LegalHead from '../components/LegalHead'
import Location from '../components/Location'
import Layout from '../components/Layout'
import ChatRoomBox from '../components/ChatRoomBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <LegalHead />
      <ChatRoomBox />
      <Location />
      <Row height='full' alignItems="center">
        <Column spans={[12,6,6]}>
          col 1
        </Column>
        <Column spans={[12,6,6]}>
          col 2
        </Column>
        <Column spans={[12,6,6]}>
          col 3
        </Column>
      </Row>
    </Layout>
  )
}
