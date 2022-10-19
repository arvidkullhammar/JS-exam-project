import React from 'react'
import Link from 'next/link'

const BackButton = () => {
  return (
    <div>
      <ul>
        <Link href="/">
          <a href="">⬅</a>
        </Link>
      </ul>
    </div>
  )
}
export default BackButton
