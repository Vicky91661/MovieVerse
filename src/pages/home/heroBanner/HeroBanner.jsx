import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import "./style.scss"

import useFetch from '../../../hooks/useFetch'
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'


function HeroBanner() {
  const [background,setBackground] = useState("")
  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  const url = useSelector((state)=>state.home.url)

  const {data,loading} = useFetch("/movie/upcoming")

  useEffect(()=>{
    const bg = url.backdrop+data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(bg)
  },[data])
  
  const searchQueryHandler = (e) => {
    if(query.length>0 && (e.key=== 'Enter'))
    {
      navigate(`/search/${query}`)
    }
  }
  const searchQueryHandlerBysearch = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className='heroBanner'>

     {!loading? <div className="backdropbg">
        <Img src={background}/>
      </div>:null}
      <div className="opacity-layer">
        
      </div>
      <ContentWrapper>
        <div className='heroBannerContent'>
          <span className='title'>Welcome .</span>
          <span className='subTitle'>Lights, Camera, Action: Explore the Cinematic Universe </span>
          <div className='searchInput'>
            <input type="text" value={query} onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)} placeholder='search for a movie or tv show...' />
            <button onClick={() => searchQueryHandlerBysearch()}>Search</button>
          </div>

        </div>
      </ContentWrapper> 

    </div>
  )
}

export default HeroBanner