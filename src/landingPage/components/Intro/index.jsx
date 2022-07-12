import React , {useRef, useState} from 'react'
import './Intro.scss'

export default function Intro() {
    const intro = useRef(0);
    
    const [xLogo , setXLogo] = useState(0)
    const [yLogo , setYLogo] = useState(0)
    
    const handleMouseMove = (e) => {
        setXLogo(e.clientX/80)
        setYLogo(e.clientY/60)
    }

    return (
        <div 
            className="intro centering"
            ref={intro} 
            onMouseMove={(e)=>{handleMouseMove(e)}}
            style={{
                transform: 'translate3D:'
            }}
        >
            <div className="intro-wrapper">
                <div className="intro-left">
                    <div className="game game-s game-left-1"></div>
                    <div className="game game-m game-left-2"></div>
                    <div className="game game-l game-left-3"></div>
                    <div className="game game-m game-left-4"></div>
                    <div className="game game-l game-left-5"></div>
                    <div className="game game-s game-left-6"></div>
                    <div className="game game-l game-left-7"></div>
                    <div className="game game-s game-left-8"></div>
                    <div className="game game-m game-left-9"></div>
                </div>
                <div className="intro-middle">
                    <div className="intro-middle-logo" style={{transform: `translate(${xLogo}px,${yLogo}px)`,transformStyle: 'preserve-3d'}}>
                        <img className="img-width" src="./images/logo.png" alt="" />
                    </div>
                </div>
                <div className="intro-right">
                    <div className="game game-s game-right-1"></div>
                    <div className="game game-m game-right-2"></div>
                    <div className="game game-l game-right-3"></div>
                    <div className="game game-m game-right-4"></div>
                    <div className="game game-l game-right-5"></div>
                    <div className="game game-s game-right-6"></div>
                    <div className="game game-l game-right-7"></div>
                    <div className="game game-s game-right-8"></div>
                    <div className="game game-m game-right-9"></div>
                </div>
            </div>
        </div>
    )
}
