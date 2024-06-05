import React from 'react'

const TopCards = () => {
    return (
      <div className='grid lg:grid-cols-3 gap-8 p-4'>
          <div className='lg:col-span-1 col-span-1 bg- flex justify-between w-full border p-4 rounded-lg bg-gradient-to-r from-cyan-300 to-blue-500 h-40'>
              <div className='flex flex-col w-full pb-4'>
                 <p className='text-2xl font-bold text-white self-center'>Ventas enviadas</p>
                  <span className='text-white text-7xl font-bold self-end'>67</span>
        </div>
          </div>
          <div className='lg:col-span-1 col-span-1 bg- flex justify-between w-full border p-4 rounded-lg bg-gradient-to-r from-pink-300 to-pink-500 h-40'>
          <div className='flex flex-col w-full pb-4'>
              <p className='text-2xl font-bold text-white self-center'>Ventas pendientes</p>
              <span className='text-white text-6xl font-bold self-end'>09</span>
          </div>
      </div>
      <div className='lg:col-span-1 col-span-1 bg- flex justify-between w-full border p-4 rounded-lg bg-gradient-to-r from-purple-400 to-purple-500'>
              <div className='flex flex-col w-full pb-4'>
                  <p className='text-2xl font-bold text-white self-center '>Nuevas ventas</p>
                  <span className='text-white text-6xl font-bold self-end'>35
                  </span>
        </div>
          </div>
      </div>
    )
  }


export default TopCards