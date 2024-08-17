import React from "react";
import classes from './Pagination.module.css';
import { filterPageArray } from "../../lib/helper/filterPageArray";
import { useActions } from "../../lib/hooks/useActions";

interface PaginationProps {
    pagesArray: number[];
    activePage: number;
    totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ pagesArray, activePage, totalPages }) => {
    const {setDevicesPage} = useActions()
    return (
        <div className={classes.pagination}>
            <button
                className={classes.paginationItem}
                onClick={() => { if (activePage > 1) setDevicesPage(activePage-1)}}
            >&lt;</button>
            {pagesArray.filter(page => filterPageArray(page, activePage, totalPages)).map(page =>
                <button 
                    className={page === activePage
                        ? `${classes.paginationItem} ${classes.paginationItemActive}`
                        : classes.paginationItem
                    }
                    key={page}
                    onClick={() => setDevicesPage(page)}
                >{page}</button>
            )}
            <button
                className={classes.paginationItem}
                onClick={() => { if (activePage < totalPages) setDevicesPage(activePage + 1)}}
            >&gt;</button>
        </div>
    )
}

export default Pagination