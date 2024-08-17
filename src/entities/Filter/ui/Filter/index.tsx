import React from "react";
import { IFilter} from "../../../../shared/types/IFilter";
import { IOption } from "../../../../shared/types/ISelect";
import {SearchForm} from "../SearchForm";
import MySelect from "../../../../shared/ui/select/MySelect";
import "./filter.scss";

interface FilterProps {
    filter: IFilter;
    id: string;
    options: IOption[];
    setFilter: (filter: IFilter) => void;
}

export const Filter = ({ filter, setFilter, options, id }: FilterProps): JSX.Element => {
    return (
        <div className="filter__inner">
            <div className="filter__select">
                <MySelect
                    id={id}
                    value={filter.sort}
                    onChange={(selectedSort : string) => setFilter({ ...filter, sort: selectedSort })}
                    defaultValue='Сортировка'
                    options={options}
                />
            </div>
            <div className="filter__form">
                <SearchForm filter={filter} setFilter={setFilter} />
            </div>
        </div>
    )
}


