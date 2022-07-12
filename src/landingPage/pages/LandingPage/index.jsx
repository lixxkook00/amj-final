import React , {useState} from 'react'
import './LandingPage.scss'
import '../../scss/_utils.scss'
import '../../scss/_animations.scss'
import '../../scss/_responsive.scss'

// MUI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import Header from '../../components/Header'
import Intro from '../../components/Intro'
import Story from '../../components/Story'
import Vision from '../../components/Vision'
import Tokenomic from '../../components/Tokenomic'
import TokenAllocation from '../../components/TokenAllocation'
import Mission from '../../components/Mission'
import Roadmap from '../../components/Roadmap'
import Tournament from '../../components/Tournament';
import Matches from '../../components/Matches';
import Team from '../../components/Team'
import Partners from '../../components/Partners'
import Footer from '../../components/Footer'

import {Link} from 'react-router-dom'

export default function LandingPage() {

  // Handle Modal Nav Moible
    const [stateNav, setStateNav] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    }); 

    const modalCartNav = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawerNav(anchor, false)}
          onKeyDown={toggleDrawerNav(anchor, false)}
        >
            <div>
                <div className="cart-title">
                    <div className="nav-logo">
                       <img className="img-height" src="/images/logo.png" alt="" />
                    </div>
                    <div className="cart-title-close">
                        <div className="clear-btn">
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                    </div>
                </div>
            </div>

            <Divider />

            <div className="tempty-title" >
                <a href="/" className="nav-item">
                    <div className="nav-item-name active" >
                        Home
                    </div>
                </a>
            </div>

            <div className="tempty-title" >
                <a href="/" className="nav-item">
                    <div className="nav-item-name" >
                        Whitepaper
                    </div>
                </a>
            </div>

             <div className="tempty-title" >
                <a href="" className="nav-item">
                    <div className="nav-item-name" >
                        Shop
                    </div>
                </a>
            </div>

            <div className="tempty-title">
                <Link to="/" className="nav-item">
                    <div className="nav-item-name nav-item-name--primary">
                        Staking
                    </div>
                </Link>
            </div>

            <div className="tempty-title">
                <a href="" className="nav-item">
                    <div className="nav-item-name nav-item-name--primary">
                        Explore
                    </div>
                </a>
            </div>

            <a href="/signin" className="nav-item">
                <div className="nav-item-name nav-item-name--primary">
                    Sign Up/Register
                </div>
            </a>

        </Box>
    );

    const toggleDrawerNav = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setStateNav({ ...stateNav, [anchor]: open });
    };

  return (
    <div className="home">
        {/* Modal Nav Mobile Menu*/}
        <div className="header-mobile-wrap hide-on-pc">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="header-mobile">
                            <div className="header-mobile-logo">
                                <img className="img-height" src="/images/logo.png" alt="" />
                            </div>

                            <div className="header-mobile-icon">
                                <i className="fa-solid fa-bars" onClick={toggleDrawerNav('left', true)}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Drawer
            anchor={'left'}
            open={stateNav['left']}
            onClose={toggleDrawerNav('left', false)}
        >
            {modalCartNav('left')}
        </Drawer>

        <Header />

        <Intro />

        <Story />

        <Vision />

        <Mission />

        <Tournament />

        <Matches />

        <Roadmap />

        <Tokenomic />

        <TokenAllocation />

        <Team />

        <Partners />

        <Footer />

        <div 
            className="scroll-to-top" 
            onClick={() => {window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })}}
        >
            <i className="fa-solid fa-arrow-up"></i>
        </div>
    </div>
  )
}
