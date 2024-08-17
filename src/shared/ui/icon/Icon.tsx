import React from 'react';
import IconsSvg from './icons.svg';
import { IIcon } from '../../types/IIcon';

interface IconProps {
    icon: IIcon;
}

const Icon = ({ icon }: IconProps): JSX.Element => {
    return (
        <svg className={icon.nameClass}>
            <use href={`${IconsSvg}#${icon.id}`}></use>
        </svg>
    )
}

export default Icon;