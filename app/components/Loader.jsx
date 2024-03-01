import React from 'react'
import loader from '../../public/loader.gif'
import Image from 'next/image'
const Loader = () => {
  return (
    <>
        <Image className="w-[200px] m-auto block" src={loader} alt='loading'/>
    </>
  )
}

export default Loader