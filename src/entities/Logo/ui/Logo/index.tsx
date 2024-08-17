import React from "react";
import Icon from "../../../../shared/ui/icon/Icon";
import "./logo.scss";

interface LogoProps {
    nameClass?: string;
}

export const Logo = ({ nameClass }: LogoProps) => {
    return (
        <div className={nameClass ? `logo ${nameClass}` : 'logo'}>
            <Icon icon={{ nameClass: "logo__icon", id: 'logo' }} />
            <h3 className="logo__title">InnStore</h3>
        </div>
    )
}