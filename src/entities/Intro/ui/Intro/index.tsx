import React, {useRef, useEffect, useState} from "react";
import { IIntro } from "../../../../shared/types/IIntro";
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'
import "./intro.scss";


interface IntroProps {
    intro: IIntro;
}

export const Intro = ({ intro}: IntroProps): JSX.Element => {
    const [vantaEffect, setVantaEffect] = useState<any>(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xff3b00,
                backgroundColor: 0x33,
                points: 15.00,
                maxDistance: 33.00,
                spacing: 18.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div ref={myRef} className="vanta">
            <div className="intro">
                <div className="container">
                    <div className="intro__inner">
                        <h1 className="intro__title">{intro.title}</h1>
                        <div className="intro__text">{intro.text}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}