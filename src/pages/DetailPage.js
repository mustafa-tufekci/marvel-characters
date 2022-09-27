import React from 'react'
import { useParams } from "react-router-dom";
import CardDetail from '../components/CardDetail';

const DetailPage = () => {
  const { id } = useParams();

  return (
    <CardDetail id={id}/>
  )
}

export default DetailPage