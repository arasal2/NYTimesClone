import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import TopFeed from '@/components/TopFeed'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // < >
      <div style={{height:"fit-content"}} className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <Header />
        <TopFeed />
      </div>
    // </>
  )
}
