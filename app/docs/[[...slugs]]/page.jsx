"use client"
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';

const Page = () => {

    useEffect(()=>{
      import('bootstrap/dist/js/bootstrap.bundle')
    },[])

  const {slugs=[]} = useParams(); // when i go to this path 'localhost:3000/docs' i got an error because the slugs in this path is undefined to treat this we can path for it a default value as a [] or use the optional chaining ?
  console.log(slugs)
  
  if(slugs.length === 1)
  return (
    <div>
      <h1 style={{backgroundColor:'black', color:'white', width:'50%', margin:'50px auto', textAlign:'center'}}>first page</h1>
      <Footer></Footer>
    </div>
  );

  else if(slugs.length === 2)
  return (
    <div>
      <h1 style={{backgroundColor:'black', color:'white', width:'50%', margin:'50px auto', textAlign:'center'}}>second page</h1>
      <Footer></Footer>
    </div>
  );
  else if(slugs.length === 3)
  return (
    <div>
      <h1 style={{backgroundColor:'black', color:'white', width:'50%', margin:'50px auto', textAlign:'center'}}>third page</h1>
      <Footer></Footer>
    </div>
  );
  else
  return (
    <div>
      <h1 style={{backgroundColor:'black', color:'white', width:'50%', margin:'50px auto', textAlign:'center'}}>doocssss</h1>
      <div className='w-50 mx-auto text-center'>
        <Link href='docs/5' className='mx-2'>
          <button className='btn btn-primary'>Go To First Dynamic</button>
        </Link>
        <Link href='docs/5/6' className='mx-2'>
          <button className='btn btn-warning'>Go To Second Dynamic</button>
        </Link>
        <Link href='docs/5/2/1' className='mx-2'>
          <button className='btn btn-danger'>Go To Third Dynamic</button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
