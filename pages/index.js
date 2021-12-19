import Head from 'next/head'
import Link from 'next/link'
import s from './app.module.scss'

export default function Home() {
  return (
    <div className={s.app}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Ready{''}
          <Link href="/posts/first-post">
            <a> this page!</a>
          </Link>
        </h1>
      </main>
    </div>
  )
}
