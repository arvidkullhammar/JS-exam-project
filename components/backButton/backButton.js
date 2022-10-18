import { useRouter } from 'next/router'
import Link from 'next/link'

const backButton = () => {
  const router = useRouter()
  return (
    <header>
      <button onClick={() => router.back()}>Back</button>
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </header>
  )
}
export default backButton
