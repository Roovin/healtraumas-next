import React from 'react'
import { useRouter } from "next/router"

export default function BlogDetail({data}) {
    const router = useRouter();
    const query = router.query
    const queryVal = query?.slug?.[0];
    const getValue = queryVal?.replace(/[^a-zA-Z ]/g, " ")

  return (
    <div>BlogDetail</div>
  )
}
