import React from 'react'
import ReactDOM from 'react-dom'

import NavBar from './components/NavBar'
import Header from './components/Header'
import ImgInfo from './components/ImgInfo'
import FlipCard from './components/FlipCard'
import Footer from './components/Footer'

import './styles/main.css'

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Header title="Šahs"/>
    <ImgInfo title='Kas ir šis "šahs"?' text="ewfb hvfewh vewhk fhbew biewbf ewbef ewb fjhweb fjbewhjv hewvfhwevb hj vkewvbk" img="./images/chess_board.png" imgPos="right"/>
    <div class="TwoPieces">
          <FlipCard theme="dark" image="./images/horsey.png" piece="Zirgs" paragraph="bfbew bbf jbfhb whebhef hew hhewfb hbewf"/>
          <FlipCard theme="light" image="./images/king.png" piece="Karalis" paragraph="bfbew bbf jbfhb whebhef hew hhewfb hbewf"/>
    </div>
    <ImgInfo title="Mihails Tals" text="ewfb hvfewh vewhk fhbew biewbf ewbef ewb fjhweb fjbewhjv hewvfhwevb hj vkewvbk" img="./images/tal.jpg" imgPos="left"/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
