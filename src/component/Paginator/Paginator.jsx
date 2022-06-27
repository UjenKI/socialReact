import React, { useState } from 'react';

import cn from 'classnames';

import styles from './Paginator.module.css';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = []

    for(let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }


    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPotyionNumber = portionNumber * portionSize;


    return (
        <div className={styles.paginator}>
            { portionNumber > 1 &&
            <button className={styles.pagination__btn + " " + styles.prev__btn} onClick={() => { setPortionNumber(portionNumber -1) }} >Prev</button> }

            {pages.filter(p => p >= leftPortionNumber && p <= rightPotyionNumber)
            .map((p) => {
                return (
                    <span className={ cn({
                        [styles.selectedPage] : currentPage === p
                    }, styles.pageNumber)}
                        key={p}
                        onClick={(e) => {
                            onPageChanged(p)
                        }}
                    >{p}</span>
                )
            })
            }
            { portionCount > portionNumber && 
            <button className={styles.pagination__btn + " " + styles.next__btn} onClick={ () => {setPortionNumber(portionNumber + 1)}}>Next</button> }
        </div>
    )
}

export default Paginator;