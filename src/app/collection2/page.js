'use client'
import NeckbandsCollection from '@/contents/collection/NeckbandsCollection'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const router=useRouter();
  return (
    <div>
       <NeckbandsCollection/>
    </div>
  )
}

export default page
