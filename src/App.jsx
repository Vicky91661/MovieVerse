import { useState,useEffect } from 'react'
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'

import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeSlice'

import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import PageNotFound from './pages/404/PageNotFound'




function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home.url)

  const apiTesting = ()=>{
    fetchDataFromApi('/configuration').then((response)=>{
      console.log(response)
      const url={
        backdrop: response.images.secure_base_url + "original", 
        poster: response.images.secure_base_url + "original",
        profile: response.images.secure_base_url + "original"
      }
      dispatch(getApiConfiguration(url))
    })
  }

  const genresCall = async () =>{
    let promises = [];
    let endPoints = ["movie","tv"];
    let allGenres = {};

    endPoints.map((endPoint)=>{
      promises.push(fetchDataFromApi(`/genre/${endPoint}/list`));
    })

    const data =await Promise.all(promises);

    data.map(({genres})=>{
      return genres.map((item) => (allGenres[item.id]=item))
    })
    console.log(allGenres)
    dispatch(getGenres(allGenres))
  }

  useEffect(()=>{
    apiTesting()
    genresCall()
  },[])

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult/>} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
