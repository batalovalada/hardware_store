import React, {ComponentProps, ElementType} from 'react';
import classes from './MyButton.module.css';

type MyButtonOwnProps<E extends ElementType = ElementType> = {
    as?: E;
    white?: boolean;
}

type MyButtonProps<E extends ElementType> = MyButtonOwnProps<E> & Omit<ComponentProps<E>, keyof MyButtonOwnProps>

const defaultElement = 'button';

export default function MyButton<E extends ElementType = typeof defaultElement > ({ children, as, white, ...props }: MyButtonProps<E>) {
    const TagName = as || defaultElement
    return (
        <TagName className={white ? `${classes.myBtn} ${classes.myBtnWhite}` : classes.myBtn} {...props}>
            {children}
        </TagName>
    )
}

 