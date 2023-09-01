import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Sidebar() {
  return (
    <div>
        <div className='m-2 mx-8 my-4'>
            <ul>
                <Link href="/components/mydrive"><li>My Drive</li></Link>
                <Link href="/components/computers"><li>Computers</li></Link>
                <Link href="/components/sharedwithme"><li>Shared With Me</li></Link>
                <Link href="/components/starred"><li>Starred</li></Link>
                <Link href="/components/spam"><li>Spam</li></Link>
                <Link href="/components/bin"><li>Bin</li></Link>
                <Link href="/components/storage"><li>Storage</li></Link>
            </ul>
        </div>
    </div>
  )
}