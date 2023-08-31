import React from 'react'

const Page404 = () => {
  return (
    <article className='p-4 min-h-screen'>
      <div>
        <img className='w-full h-60' src="/images/error.svg" alt="" />
      </div>
      <section className='text-center mt-10'>
        <h2>Error 404 Page not found</h2>
      </section>
    </article>
  )
}

export default Page404