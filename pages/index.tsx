import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main>
        {/* side bar*/}
        <Sidebar />
        {/* center*/}
      </main>
      <div> {/*player bar*/}</div>
    </div>
  )
}

export default Home
