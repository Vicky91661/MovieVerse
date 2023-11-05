import React from 'react'
import "./style.scss"

import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailBanner'

function Details() {
  // const { mediaType ,id} = useParams();
  // const { data, loading } = useFetch(`/${mediaType}/${id}`);
  // console.log(data);

  return (
    <div>
      <DetailsBanner/>
    </div>
  )
}

export default Details