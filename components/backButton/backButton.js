import React from 'react'
import { useRouter } from 'next/router'

function backButton() {
  const router = useRouter()

  return <span onClick={() => router.back()}>Click here to go back</span>
}
export default backButton
