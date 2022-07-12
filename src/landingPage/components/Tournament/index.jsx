import React from 'react'
import './Tournament.scss'

export default function Tournament() {
  return (
    <div className="tournament">
        <div className="tournament-title centering">
            <div className="primary-title primary-gradient-text">
                Tournament
                <div className="primary-title__line"></div>
            </div>
        </div>

        <div className="tournament-wrapper">

            <div className="tournament-item">
                <div className="tournament-item-bg">
                    <img src="https://playerx.qodeinteractive.com/elementor/wp-content/uploads/2018/06/blog-2-img-3.jpg" alt="" />
                </div>

                <div className="tournament-item-content">
                    <div className="tournament-item-content-category">
                        eporst
                    </div>
                    <div className="tournament-item-content-name">
                        White Keep Assault 
                    </div>
                    <div className="tournament-item-content-date">
                        <i className="fa-solid fa-calendar-days"></i>
                        <p>
                            September 14, 2021      
                        </p>
                    </div>
                    <div className="tournament-item-content-decs">
                        Maecenas tempus, tellus eget condimentum rhoncus, sem quam ...
                    </div>
                </div>
            </div>

            <div className="tournament-item">
                <div className="tournament-item-bg">
                    <img src="https://playerx.qodeinteractive.com/elementor/wp-content/uploads/2018/06/blog-2-img-2.jpg" alt="" />
                </div>

                <div className="tournament-item-content">
                    <div className="tournament-item-content-category">
                        eporst
                    </div>
                    <div className="tournament-item-content-name">
                        Dota 2 Tournament 
                    </div>
                    <div className="tournament-item-content-date">
                        <i className="fa-solid fa-calendar-days"></i>
                        <p>
                            September 14, 2021      
                        </p>
                    </div>
                    <div className="tournament-item-content-decs">
                        Maecenas tempus, tellus eget condimentum rhoncus, sem quam ...
                    </div>
                </div>
            </div>

            <div className="tournament-item">
                <div className="tournament-item-bg">
                    <img src="https://playerx.qodeinteractive.com/elementor/wp-content/uploads/2018/06/blog-2-img-1.jpg" alt="" />
                </div>

                <div className="tournament-item-content">
                    <div className="tournament-item-content-category">
                        eporst
                    </div>
                    <div className="tournament-item-content-name">
                        Winners on ESL Pro 
                    </div>
                    <div className="tournament-item-content-date">
                        <i className="fa-solid fa-calendar-days"></i>
                        <p>
                            September 14, 2021      
                        </p>
                    </div>
                    <div className="tournament-item-content-decs">
                        Maecenas tempus, tellus eget condimentum rhoncus, sem quam ...
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
