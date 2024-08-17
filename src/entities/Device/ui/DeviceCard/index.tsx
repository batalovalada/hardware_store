import React from "react";
import { IDevice } from "../../../../shared/types/IDevice";
import MyButton from "../../../../shared/ui/button/MyButton";
import Icon from "../../../../shared/ui/icon/Icon";
import { Evaluation } from "../../../../features/Device";
import { Price } from "../../../../features/Device";

interface DeviceCardProps {
    device: IDevice;
}

export const DeviceCard = ({ device }: DeviceCardProps): JSX.Element => {
    return (
        <div className="device__card">
            <div className="device__header">
                <button className="device__btn" type="button">
                    <Icon icon={{ nameClass: "device__icon", id: "like" }} />
                </button>
                <div className="device__photo">
                    <img src={device.url} alt={device.title} className="device__img" />
                </div>
            </div>
            <div className="device__discription">
                <h3 className="device__title">{device.title}</h3>
                <div className="device__footer">
                    <div className="device__data">
                        <Price price={4999} percentSale={15} />
                        <Evaluation rating={3.6} />
                    </div>
                    <MyButton type="button">Купить</MyButton>
                </div>
            </div>
        </div>
    )
}