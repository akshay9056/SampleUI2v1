import React from 'react'

function Header() {
  return (
    <div className='container  grid grid-cols-3 gap-2 p-3'>
        <div className='btn btn-warning text-white text-xl'>VPI</div>
        <div className='btn btn-success text-white text-xl'>NICE</div>
        <div className='btn btn-secondary text-white text-xl'>GENESYS</div>

    </div>
  )
}

export default Header