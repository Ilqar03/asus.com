import React from 'react'
import Navbar from '../../components/Navbar'
import MainSlider from '../../components/Homecomponents/MainSlider'
import SlickSlider from '../../components/Homecomponents/SlickSlider'
import StoriesCard from '../../components/Homecomponents/StoriesCard'
import ActionCard from '../../components/Homecomponents/ActionCard'
import UniverseSec from '../../components/Homecomponents/UniverseSec'
import Footer from '../../components/Footer'
function Home() {
  return (
    <>
    <Navbar/>
    <MainSlider/>
    <SlickSlider/>
    <StoriesCard/>
    <ActionCard/>
    <UniverseSec/>
    <Footer/>
    </>
  )
}

export default Home