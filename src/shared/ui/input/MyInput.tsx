import React from 'react';
import classes from './MyInput.module.css';

export type MyInputType = 'text' | 'search' | 'password' | 'email' | 'url' | 'tel';

export interface MyInputProps extends React.HTMLAttributes < HTMLInputElement > {
    //onBlur?: () => void;
    //onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type?: MyInputType;
    //placeholder?: string;
}

const MyInput: React.FC<MyInputProps> = (props) => {
    return (
        <input className={classes.myInput} {...props}/>
    )
}

export default MyInput;