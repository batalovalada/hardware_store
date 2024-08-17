import React from 'react';
import { IOption } from '../../types/ISelect';
import classes from './MySelect.module.css';

export interface MySelectProps  {
    id: string;
    options: IOption[];
    defaultValue: string;
    value: string;
    onChange: (value: string) => void;
}

const MySelect: React.FC<MySelectProps> = ({ options, defaultValue, value, onChange, id }) => {
    return (
        <select 
            className={classes.mySelect}
            id={id}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>):void => onChange(e.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map((option: IOption): React.ReactNode => <option value={option.value} key={option.value}>{option.name}</option>)}
        </select>
    )
}

export default MySelect;