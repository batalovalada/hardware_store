import React, { useState } from "react";
import { brandsBtns } from "../../consts/deviceBrands";

export const DeviceBrand: React.FC = () => {
    const [activeBtn, setActiveBtn] = useState(brandsBtns[0].title)
    return (
        <div className="device__brand">
            {brandsBtns.map(item =>
                <div className="device__brand-item" key={item.title}>
                    <button
                        className={activeBtn === item.title ? "device__brand-btn active" : "device__brand-btn"}
                        type="button"
                        onClick={() => setActiveBtn(item.title)}
                    >{item.title}</button>
                </div>
            )}
        </div>
    )
}