import Head from 'next/head'
import GridDebug from '@/components/_ui/GridDebug'
import Button from '@/components/_ui/Button'
import Link from '@/components/_ui/Link'

export default function Home() {
  return (
    <>
      <Head>
        <title>HIT THE GROUND RUNNING</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container f-body-1">
          <Button>i am a button</Button>
          <div>
            <Link href="http:www.example.com">hello click me</Link>
          </div>
        </div>
      </main>
      <GridDebug />
    </>
  )
}