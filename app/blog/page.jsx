'use client'
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/components/navbar';
import Link from 'next/link';


const Page = () => {

  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap.bundle')
  },[])
  return (
    <div>
      {/* <h1 style={{backgroundColor:'crimson', color:'white', width:'50%', margin:'50px auto', textAlign:'center'}}>Blog page</h1> */}
      {/* <Navbar></Navbar> */}
      <h1 className='alert alert-danger text-center my-5 w-50 mx-auto'>Blog page</h1>
      <div className='w-25 mx-auto text-center'>
        <Link href='blog/first'>
          <button className='btn btn-primary'>Go To First</button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
