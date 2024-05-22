import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-evenly'>
    <div className='flex-wrap px-8 pt-8'>
        <h2 className='font-bold'>Ganancias totales</h2>
        <h2 className='font-bold text-3xl'>$ 45,365.00</h2>
    </div>
    <div className='self-center'>
    <input type="text" placeholder="Búsqueda" className="input input-bordered w-full max-w-xs" />
    </div>
    <div className="avatar">
    <div className="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
    </div>
    </div>
  )
}

export default Header