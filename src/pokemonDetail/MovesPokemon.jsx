import React from 'react'

const MovesPokemon = ({moves}) => {
  return (
    <section className='px-2'>
        <section className='flex flex-wrap gap-4'>
            {
                moves?.map((move) => <div key={move.move.name} className='bg-slate-200 px-4 py-1 rounded-3xl capitalize hover:bg-slate-300 transition-colors'>
                    <h2>{move?.move.name}</h2>
                </div> )
            }
        </section>
    </section>
  )
}

export default MovesPokemon