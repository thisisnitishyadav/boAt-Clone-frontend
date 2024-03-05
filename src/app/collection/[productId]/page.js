'use client'
import { useRouter } from 'next/navigation';
import EarbudsCollection from '@/contents/collection/EarbudsCollection';
import NeckbandsCollection from '@/contents/collection/NeckbandsCollection';

const page = () => {
  const router=useRouter();
  const prod = router.query;
  return (
    <>
      {prod}
      <EarbudsCollection/>
      <NeckbandsCollection/>
    </>
  )
}

export default page
