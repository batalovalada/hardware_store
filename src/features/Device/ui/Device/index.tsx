import React from "react";
import { DeviceList, DeviceNav } from "../../../../entities/Device";
import "./device.scss";

export const Device: React.FC = () => {
    return (
        <div className="device">
            <div className="container">
                <div className="device__main">
                    <DeviceNav />
                    <DeviceList />
                </div>
            </div>
        </div>
    )
}