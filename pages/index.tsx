import Head from 'next/head'
import styled from '@emotion/styled'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Jackpots from '@/components/Jackpots'
import  {generateLotteries} from '@/services/fakeData'


export default function Home({jackpots} : any) {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Jackpots  jackpots={jackpots}/>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await generateLotteries(5)
  return {
    props: {
      jackpots: JSON.parse(JSON.stringify(data)),
    },
  }
}
