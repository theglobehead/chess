import React from 'react'
import ReactDOM from 'react-dom'

import NavBar from './components/NavBar'
import Header from './components/Header'
import ImgInfo from './components/ImgInfo'
import FlipCard from './components/FlipCard'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Header title="Šahs"/>
    
    <ImgInfo title="Magnus Karlsens" text="ewfb hvfewh vewhk fhbew biewbf ewbef ewb fjhweb fjbewhjv hewvfhwevb hj vkewvbk" img="../images/magnus.webp" imgPos="right"/>
    
    <ImgInfo title="Mihails Tals" text="ewfb hvfewh vewhk fhbew biewbf ewbef ewb fjhweb fjbewhjv hewvfhwevb hj vkewvbk" img="../images/tal.jpg" imgPos="left"/>
    
    <ImgInfo title="Pauls Merfijs" text="ewfb hvfewh vewhk fhbew biewbf ewbef ewb fjhweb fjbewhjv hewvfhwevb hj vkewvbk" img="../images/morphy.webp" imgPos="right"/>
    
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
