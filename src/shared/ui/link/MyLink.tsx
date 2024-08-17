import React from "react";
import classes from "./MyLink.module.css";
import { Link } from "react-router-dom";

interface MyLinkProps {
    to: string;
    white?: boolean;
    children?: React.ReactNode;
}

const MyLink = ({ to, children, white, ...props }: MyLinkProps): JSX.Element => {
    return (
        <Link className={white ? `${classes.myLink} ${classes.myLinkWhite}` : classes.myLink} to={to} {...props}>
            {children}
        </Link>
    )
}

export default MyLink;
