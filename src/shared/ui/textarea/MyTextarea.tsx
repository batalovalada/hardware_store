import React from "react";
import classes from './MyTextarea.module.css';

export interface MyTextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    value?: string;
    rows?: any;
    cols?: any;
}

const MyTextarea: React.FC<MyTextareaProps> = (props) => {
    return (
        <textarea className={classes.myTextarea} {...props}/>
    )
}

export default MyTextarea;