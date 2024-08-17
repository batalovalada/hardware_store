import React, { useEffect, useState } from "react";
import { useActions } from "../../../../shared/lib/hooks/useActions";
import { useTypedSelector } from "../../../../shared/lib/hooks/useTypedSelector";
import Loader from "../../../../shared/ui/loader/Loader";
import { DeviceCard } from "../DeviceCard";
import { getPageCount, getPagesArray } from "../../lib/utils/pages";
import Pagination from "../../../../shared/ui/pagination/Pagination";
import { usePosts } from "../../../../shared/lib/hooks/usePosts";
import { IFilter } from "../../../../shared/types/IFilter";
import { Filter } from "../../../Filter";

export const DeviceList = () => {
    const {devices, loading, error, page, limit} = useTypedSelector(state => state.device)
    const {fetchDevices} = useActions()

    //filter
    const [filter, setFilter] = useState<IFilter>({ sort: '', query: '' });
    const sortedSearchedPosts = usePosts(devices, filter.sort, filter.query);

    //pagination
    const [totalPages, setTotalPages] = useState(0)
    let pagesArray = getPagesArray(totalPages)

    useEffect(() => {
        fetchDevices(limit, page, setTotalPages);
    }, [page])

    if (loading) {
        return (
            <div className="error">
                <div className="error__loader">
                    <Loader />
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="error">
                <h1 className="error__title">{`Произошла ошибка! ${error}`}</h1>
            </div>
        )
    }

    return (
        <div className="device__list">
            <div className="device__filter">
                <Filter filter={filter} setFilter={setFilter} id='devices-filter' options={[
                    { value: 'title', name: 'По заголовку' },
                    { value: 'priceDown', name: 'По цене (по убыванию)' },
                    { value: 'priceUp', name: 'По цене (по возрастанию)' },
                    { value: 'evaluationUp', name: 'По рейтингу (по возрастанию)' },
                    { value: 'evaluationDown', name: 'По рейтингу (по убыванию)' }
                ]} />
            </div>
            <div className="device__list-main">
                {sortedSearchedPosts.map(device =>
                    <DeviceCard device={device} key={device.id} />
                )}
            </div>
            <Pagination pagesArray={pagesArray} activePage={page} totalPages={totalPages}/>
        </div>
    )
}