import React from 'react'

import { Route,Routes} from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage'
import ICOPages from '../pages/ICOPages'
import StakingPage from '../pages/StakingPage'
import SignUpPage from '../pages/SignUpPage'
import SignInPage from '../pages/SignInPage'
import UserInfor from '../pages/UserInfor'
import NotFound404 from '../pages/NotFound404'
import MyTeamPage from '../pages/MyTeamPage'
import VerifyEmail from '../pages/VerifyEmail'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'
import Explore from '../pages/Explore'
import ShopPage from '../pages/ShopPage'
import Tournaments from '../pages/Tournaments'


import LandingPage from '../landingPage/pages/LandingPage'

export default function Router() {
  return (
    <Routes>
        <Route exact path="/" element={<LandingPage />} />

        <Route exact path="/dashboard" element={<DashboardPage />} />
      
        <Route exact path="/ico" element={<ICOPages />} />
        
        <Route exact path="/staking" element={< StakingPage />} />

        <Route exact path="/shop" element={< ShopPage />} />

        <Route exact path="/explore" element={< Explore />} />

        <Route exact path="/tournaments" element={< Tournaments />} />

        <Route exact path="/signup" element={< SignUpPage />} />

        <Route exact path="/signin" element={< SignInPage />} />

        <Route exact path="/user" element={< UserInfor />} />

        <Route exact path="/myteam" element={< MyTeamPage />} />

        <Route exact path="/verify" element={< VerifyEmail />} />

        <Route exact path="/forgotpassword" element={< ForgotPassword />} />

        <Route exact path="/reset/password" element={< ResetPassword />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound404/>} />

    </Routes>
  )
}
