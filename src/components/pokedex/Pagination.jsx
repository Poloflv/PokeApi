import React from 'react'
const FIRST_PAGE = 1

const Pagination = ({lastPage,pagesInCurrentBlock, setCurrentPage, currentPage}) => {
    const handleNextPage = () => {
        setCurrentPage((prevState)=> {
            const nextPage = prevState + 1
            if (nextPage <= lastPage) return nextPage 
            return prevState
        })
    }

    // console.log(currentPage);
    // console.log(pagesInCurrentBlock);

    const handleLastPage = () => setCurrentPage(lastPage)

    const handlePreviusPage = () => 
    setCurrentPage((prevPage) => {
        const newPage = prevPage - 1
        if(newPage >= FIRST_PAGE) return newPage
        return prevPage
    })

    const handleFirtsPage = ( )=> setCurrentPage (FIRST_PAGE)
  return (
    <ul className='flex justify-center gap-4 p-4 items-center'>
        {currentPage >= 2 && <li className='cursor-pointer' onClick={handleFirtsPage}>{"<<"}</li>}

        {currentPage >= 2 && <li className='cursor-pointer' onClick={handlePreviusPage}>{"<"}</li>}
        {
            pagesInCurrentBlock.map((page)=> <li className={`p-2 cursor-pointer ${currentPage === page ? "text-white bg-red-500 px-4 " : ""}`} key={page} onClick={() => setCurrentPage(page)}  >{page}</li>)
        }
        {currentPage < 65 && <li className='cursor-pointer' onClick={handleNextPage}>{">"}</li>}
        {currentPage < 65 && <li className='cursor-pointer' onClick={handleLastPage}>{">>"}</li>}
    </ul>
  )
}

export default Pagination