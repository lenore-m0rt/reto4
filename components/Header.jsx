import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row items-center place-content-around'>
    <div className='flex-wrap px-8 pt-8'>
        <h2 className='font-bold'>Ganancias totales</h2>
        <h2 className='font-bold text-3xl'>$ 45,365.00</h2>
    </div>
    <div className='w-2/4'>
    <input type="text" placeholder="Búsqueda" className="input input-bordered w-full" />
    </div>
    <div className='grid md:grid-cols-2 gap-2 align-right'>
    <div className='justify-self-end'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
      <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
      </svg>
    </div>
    <div className='justify-self-end'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
      <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
      </svg>
    </div>
    </div>
    <div className="avatar justify-self-start">
      <div className="w-12 h-12 rounded-full">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    </div>
  )
}

export default Header