import React from 'react'
import { logout } from '../../store/slices/trainer.slice'
import { useDispatch } from 'react-redux'

const HeaderPokeball = ({children}) => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div>
      <header>
        <div className="h-16 bg-red-600 relative">
        <img
          className="absolute left-10 bottom-0 w-[210px] z-30 sm:w-[300px]"
          src="/images/pokedex.png"
          alt=""
        />
        </div>
        <div className="h-10 bg-black relative">
          <button onClick={handleLogout}  className='h-16 aspect-square bg-white rounded-full absolute left-3/4 -translate-x-1/2 top-0 border-[8px] border-black after:block after:content-[""] after:h-8 after:aspect-square after:bg-slate-800 after:rounded-full after:absolute  after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:top-1/2 after:border-4 after:border-black transition-colors hover:bg-red-500 cursor-pointer'>

          </button>
        </div>
      </header>
      {children}
    </div>
  )
}

export default HeaderPokeball