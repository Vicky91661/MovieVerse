import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import Top_rated from './top_rated/Top_rated'

function Home() {
  return (
    <div>
        <HeroBanner/>
        <Trending/>
        <Popular/>
        <Top_rated/>
        
    </div>
  )
}

export default Home