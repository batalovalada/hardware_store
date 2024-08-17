//show 5 pagimation btns

export const filterPageArray = (page:number, activePage: number, totalPages: number): boolean | undefined => {
    if (activePage <= 5) return page <= 5
    if (activePage > 5 && activePage < totalPages - 2) return page < activePage + 3 && page > activePage - 3
    if (activePage >= totalPages - 2 && activePage <= totalPages) return page > totalPages - 5 && page <= totalPages
}