import React, { useState } from "react";
import { navBtns } from "../../consts/deviceNav";

export const DeviceNav: React.FC = () => {
    const [activeBtn, setActiveBtn] = useState(navBtns[0].title)
    return (
        <div className="device__nav">
            {navBtns.map(item => 
                <div className="device__nav-item" key={item.title}>
                    <button 
                        className={activeBtn === item.title ? "device__nav-btn active" : "device__nav-btn"}
                        type="button"
                        onClick={() => setActiveBtn(item.title)}
                    >{item.title}</button>
                </div>
            )}
        </div>
    )
}