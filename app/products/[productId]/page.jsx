"use client"
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
  const {productId:id} = useParams(); // in the begnning we got an error because we can't use this hook with the compoent that works as SSR --> next by default works as a SSR and this hook to run seuccsfuly we must convert this component to work as CSR to do that we will write in the first line of this page the sentense 'use client'
  return (
    <div>
      <h1 style={{backgroundColor:'yellowgreen', color:'white', width:'50%', margin:'50px auto', textAlign:'center'}}>Product number: {id}</h1>
    </div>
  );
}

export default Page;
 