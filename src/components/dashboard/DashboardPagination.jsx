import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export const DashboardPagination = ({ totalPosts, postPerPage, setCurrentPage, currentPage}) => {
    let pages = [];

    const [pageValue, setPageValue] = useState(currentPage);

    for (let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++) {
        pages.push(i);   
    }

    const nextPage = () => {
        if(currentPage <= Math.ceil(totalPosts/postPerPage)){
            setCurrentPage( currentPage + 1);
            setPageValue( currentPage + 1 )
        }
    }

    const prevPage = () => {
        if( currentPage > 1 ){
            setCurrentPage( currentPage - 1 );
            setPageValue( currentPage - 1 )
        }
    }

    const handlePage = (evt) => {
        setPageValue( Number(evt.target.value) )
    }

    const onSubmitPage = (evt) =>{
        evt.preventDefault();
        setCurrentPage( pageValue )
    }

  return (
    <div className="w-full flex items-center justify-between py-4 px-5 bg-bgc_white-100 dark:bg-dark-800 dark:border-gray-700 border-t border-gray-300 h-24">
        <button 
            onClick={ prevPage }
            className={`${ currentPage === 1 && "cursor-not-allowed opacity-50" } dark:border-gray-700 border border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800 text-gray-900 flex items-center gap-2 py-2 px-4 rounded-full hover:bg-gray-300`}
            disabled={ currentPage === 1 && true }
        > 
            <HiChevronLeft /> Anterior
        </button>
        <div className="flex gap-3">
            <p className="rounded-lg py-1 px-4 text-center text-gray-700 dark:text-gray-200 text">Pagina: </p>
            <form 
                onSubmit={ onSubmitPage }
            >
                <input 
                    type="number" 
                    className="outline-none py-1 px-2 rounded-lg text-gray-600 bg-white dark:text-gray-300 dark:bg-dark-700" min="1" 
                    max={ Math.ceil(totalPosts/postPerPage)} 
                    onChange={ handlePage } value={ pageValue } 
                />
            </form>
            <p className="rounded-lg py-1 px-4 text-center text-gray-700 dark:text-gray-200"> { pages.length } </p>
        </div>
        <button 
            onClick={ nextPage }
            className={`${ currentPage >= (Math.ceil(totalPosts/postPerPage)) && "cursor-not-allowed opacity-50" } dark:border-gray-700 border border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800 text-gray-900 flex items-center gap-2 py-2 px-4 rounded-full hover:bg-gray-300`}
            disabled={ currentPage >= (Math.ceil(totalPosts/postPerPage)) && true }
        > 
            Siguiente <HiChevronRight /> 
        </button>
    </div>
  )
}
