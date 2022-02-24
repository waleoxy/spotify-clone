import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Center from '../components/Center'
import { getSession } from 'next-auth/react'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div> {/*player bar*/}</div>
    </div>
  )
}

export default Home

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  return {
    props: { session },
  }
}
