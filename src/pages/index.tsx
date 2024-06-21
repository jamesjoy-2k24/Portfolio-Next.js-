import React from 'react'
import Head from 'next/head'
import Button from '../components/common/Button'

const Home: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked')
  }

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Professional portfolio of [Your Name]"
        />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <Button label="Click Me" onClick={handleClick} />
      </main>
    </>
  )
}

export default Home
