import React from 'react'
import "./index.scss"
function Footer() {
  return (
    <footer>
      <div id='elements'>
        <div id='Choice'>
          <div id='Choice_elements'>
            <ul>
              <li><a href=''>ABOUT ROG</a></li>
              <li><a href=''>HOME</a></li>
              <li><a href=''>NEWSROOM</a></li>
              <li><a href=''>ACCESSIBILITY HELP</a></li>
            </ul>
          </div>
          <div id='Choice_icon'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-discord"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitch"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <hr></hr>
        <div id='about'>
          <div id='languace'>
            <a href=''>
              <i class="fa-solid fa-globe"></i>
              Global/English
            </a>
          </div>
          <div id='terms'>
            <ul>
              <li><a href=''>TERMS OF USE NOTICE</a></li>
              <li><a href=''>PRIVACY POLICY</a></li>
            </ul>
            <p>©ASUSTEK COMPUTER INC. ALL RIGHTS RESERVED</p>
          </div>
        </div>
        <div id='Footer_img'>
          <img src='https://dlcdnwebimgs.asus.com/gain/d21639fb-61ed-44c0-bb72-df9698e523fe'></img>
        </div>
      </div>
      {/* //////   reponsive 780 px //////////////////// */}
      <div id='responsive_elements'>
        
        <div id='Choice_elements'>
          <ul>
            <li><a href=''>ABOUT ROG</a></li>
            <hr></hr>
            <li><a href=''>HOME</a></li>
            <hr></hr>
            <li><a href=''>NEWSROOM</a></li>
            <hr></hr>
            <li><a href=''>ACCESSIBILITY HELP</a></li>
            <hr></hr>
          </ul>
        </div>
        <div id='Choice_icon'>
          <div><p>FOLLOW ROG</p></div>
          <div id='icon'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-discord"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitch"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <hr></hr>
        <div id='about'>
          <div id='languace'>
            <a href=''>
              <i class="fa-solid fa-globe"></i>
              Global/English
            </a>
          </div>
          <div id='terms'>
            <ul>
              <li><a href=''>TERMS OF USE NOTICE</a></li>
              <li><a href=''>PRIVACY POLICY</a></li>
            </ul>
            <p>©ASUSTEK COMPUTER INC. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer