'use client'
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
  const {reviewId:id} = useParams();
  
  return (
    <div>
      <h1 style={{backgroundColor:'yellowgreen', color:'white', width:'50%', margin:'50px auto', textAlign:'center'}}>review number: {id}</h1>
      
    </div>
  );
}

export default Page;
