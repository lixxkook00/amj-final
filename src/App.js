import './App.scss';

import {useState} from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import HeaderMobile from './components/HeaderMobile'
import Router from './routers/Router'

function App() {

  // console.log(window.location.pathname)

  const [pathname,setPathname] = useState(window.location.pathname)

  return (
    <div className="App">
      
      
      {
        pathname!=="/"
        &&
        <Header />
      }

      <HeaderMobile />

      <Router />

      {
        pathname!=="/"
        &&
        <Footer />
      }
      {/* <Footer /> */}

    </div>
  );
}

export default App;
