import React from 'react'

const ListPagination = ({currentPage,backForwardHandle,changePage,allPages}) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className={`page-item ${ currentPage !== 1  ? '' : 'disabled' }` }>
                <button className="page-link"  data-value="-1" onClick={ backForwardHandle }>Previous</button>
                </li>
                { currentPage !== 1 ?  <li className="page-item"><button className="page-link" href="#" onClick={changePage}>{currentPage - 1}</button></li> : ''}
                <li className="page-item disabled"><button className="page-link" href="#" onClick={changePage}>{currentPage}</button></li>
                {currentPage !== allPages ? <li className="page-item"><button className="page-link" href="#" onClick={changePage}>{currentPage + 1}</button></li> : ''}
                <li className={`page-item ${ currentPage !== allPages  ? '' : 'disabled' }` }>
                <button className="page-link"  data-value="1" onClick={ backForwardHandle }>Next</button>
                </li> 
            </ul>
        </nav>
    )
}

export default ListPagination;
