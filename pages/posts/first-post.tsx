import React from 'react';
import Link from 'next/link'
import s from './posts.module.scss'

const posts = [
  "hello", "my", "First Post"
] 

interface Posts {
  post: string,
}

function FirstPost(posts: Posts) {
  return (
    <div className={s.posts}>
    <h1>First Post added to vercel</h1>
    <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  )
}

export default FirstPost;