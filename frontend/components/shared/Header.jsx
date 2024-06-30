import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
  return (
    <nav className='navbar'>
      <div className='grow'>
        <Link href="/">
          <p className='text-xl md:text-2xl font-extrabold tracking-tighter text-gray-900'>
            Wishblock
          </p>
        </Link>
      </div>
      <div>
        <ConnectButton />
      </div>
    </nav>
  )
}

export default Header
