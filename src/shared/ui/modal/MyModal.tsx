import React, {useEffect} from 'react';
import cl from './MyModal.module.css';

interface MyModalProps {
    active: boolean;
    setActive: (active: boolean) => void;
    children: React.ReactNode;
 }

const MyModal: React.FC<MyModalProps> = ({active, setActive, children}) => {
    useEffect(() => {
        if (active) document.body.classList.add('no-scroll')
        else document.body.classList.remove('no-scroll')
    }, [active]);

    return (
        <div 
            className={active ? [cl.myModal, cl.active].join(' ') : cl.myModal}
            onClick={():void => setActive(false)
        }>
            <div 
                className={active ? [cl.myModalContent, cl.active].join(' ') : cl.myModalContent} 
                onClick={(e: React.MouseEvent<HTMLDivElement>):void => e.stopPropagation()}
            >
                <button className={cl.myModalClose} type="button"
                    onClick={():void => setActive(false)
                }>
                    <svg className={cl.myModalSvg} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6L18 18M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                {children}
            </div>
        </div>
    )
}

export default MyModal;