import Head from 'next/head'
import Hero from '@/components/page/Hero'

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
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <Hero />
      </main>
    </>
  )
}

export default Home
