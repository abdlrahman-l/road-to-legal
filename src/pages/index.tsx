import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import LegalHead from '../components/LegalHead'
import Location from '../components/Location'
import Layout from '../components/Layout'
import Chat from 'src/components/Chat'
import InvitationConfirmation from 'src/components/InvitationConfirmation'
import FloatingMusicPlayer from 'src/components/FloatingMusicPlayer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <LegalHead />
      <Chat />
      <InvitationConfirmation />
      <Location />
      {/* <FloatingMusicPlayer /> */}
    </Layout>
  )
}
