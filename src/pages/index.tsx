import Head from 'next/head'
import Hero from '@/components/page/Landing'
import Navbar from '@/components/common/Navbar'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Professional portfolio of [Joy James]"
        />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <Hero />
      </main>
    </>
  )
}

export default Home
