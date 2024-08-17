import React from "react";
import MyInput from "../../../../shared/ui/input/MyInput";
import Icon from "../../../../shared/ui/icon/Icon";
import { IFilter } from "../../../../shared/types/IFilter";

interface SearchFormProps {
    filter: IFilter;
    setFilter: (filter: IFilter) => void;
}

export const SearchForm = ({ filter, setFilter }: SearchFormProps): JSX.Element => {
    return (
        <form className="form-search" action="/" method="get">
            <MyInput
                type="search"
                placeholder="Поиск" 
                value={filter.query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: e.target.value})}
            />
            <button className="form-search__btn" type="button">
                <Icon icon={{ id: 'search', nameClass: 'filter__icon' }} />
            </button>
        </form>
    )
}
