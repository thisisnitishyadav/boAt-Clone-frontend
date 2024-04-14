'use client'
import { useRouter } from 'next/navigation';
import ProductCollection from '@/contents/collection/productCollection';


const page = () => {
  const router=useRouter();
  const prod = router.query;
  return (
    <>
      {prod}
      <ProductCollection/>
     
    </>
  )
}

export default page
