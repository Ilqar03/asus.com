import React from 'react'
import "./index.scss"
function ActionCard() {
  return (
    <div id='ActionCard'>
      <h2>ROG IN ACTION</h2>
      <div id='card'>
        <div>
          <img src='https://dlcdnrog.asus.com/rog/media/1671059676670.webp'></img>
          <p>After one year with Xbox Game Pass, I'm never giving it up</p>
          <p>I once dreamed of a day when I could play any game I wanted, whenever I wanted, with the push of a button. Xbox Game Pass made that dream a reality. </p>
        </div>
        <div>
          <img src='https://dlcdnrog.asus.com/rog/media/1664418290661.webp'></img>
          <p>Star Citizen: 10 years of pushing the boundaries of what a game can be</p>
          <p>Star Citizen is a space simulation game that has spent a decade redefining what is possible in the genre.</p>
        </div>
        <div>
          <img src='https://dlcdnrog.asus.com/rog/media/1652837729215.webp'></img>
          <p>Take an incredible journey across the Old West in Red Dead Redemption 2</p>
          <p>Travel back in time to the Old West with this story-driven masterpiece.</p>
        </div>
      </div>
      <a href=''>Learn More > </a>
    </div>
  )
}

export default ActionCard