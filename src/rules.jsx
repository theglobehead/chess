import React from 'react'
import ReactDOM from 'react-dom'

import NavBar from './components/NavBar'
import Header from './components/Header'
import ImgInfo from './components/ImgInfo'
import VideoInfo from './components/VideoInfo'
import FlipCard from './components/FlipCard'
import Test from './components/test'
import Footer from './components/Footer'

import "./styles/rules.css"

let list = (
  <ul>
    <li>ne  reiirebz</li>
    <li>nez bfbwe bfbwe</li>
    <li>n ewbbef ef ewfez</li>
    <li>njern nb jnenfe njw</li>
    <li>njern nb jnenfe njw</li>
    <li>njern nb jnenfe njw</li>
  </ul>
)

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Header title="Šahs"/>
    <ImgInfo title="Hello" text="ewfb hvfewh vewhk fhbew biewbf ewbef ewb fjhweb fjbewhjv hewvfhwevb hj vkewvbk" img="../images/chess_board.png" imgPos="left"/>
    <div class="SixCards">
      <div class="ThreeCards">
          <FlipCard theme="light" image="../images/bishop.png" piece="Bišops" paragraph="bfbew bbf jbfhb whebhef hew hhewfb hbewf"/>
          <FlipCard image="../images/horsey.png" piece="Zirgs" paragraph="bfbew bbf jbfhb whebhef hew hhewfb hbewf"/>
          <FlipCard theme="light" image="../images/king.png" piece="Karalis" paragraph="bfbew bbf jbfhb whebhef hew hhewfb hbewf"/>
      </div>
      <div class="ThreeCards">
          <FlipCard image="../images/pawn.png" piece="Bandinieks" paragraph="bfbew bbf jbfhb whebhef hew hhewfb hbewf"/>
          <FlipCard  theme="light" image="../images/queen.png" piece="Karaliene" paragraph="bfbew bbf jbfhb whebhef hew hhewfb hbewf"/>
          <FlipCard piece="Tornis" image="../images/rook.png" paragraph={<p>bfbew bbf jbfhb <u>whebhef</u> hew hhewfb hbewf</p>}/>
      </div>
    </div>
    
    <VideoInfo title="Likumi kurus atcerēties" list={list} video="../images/tal.jpg" imgPos="left"/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
