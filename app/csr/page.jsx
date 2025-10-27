'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [userData, setUserData] = useState(null);
  useEffect(()=>{
    fetch(process.env.NEXT_PUBLIC_urlDB) // come from the .env folder as a public global variable
    .then((res)=>res.json())
    .then((data)=> setUserData(data))
  },[])
  console.log(process.env.NEXT_PUBLIC_urlDB, process.env.DB_KEY)
  return (
    <div>
      <h1 className='alert alert-danger w-50 mx-auto my-3'>CSR</h1>
      
      <div className='d-flex justify-content-center gap-3 flex-wrap mx-auto' style={{width:'80%'}}>
        {
        userData?.map((usr)=> {
          return <div key={usr.id} className="card" style={{width: '18rem'}}>
            {/* <img src={usr.avatar} className="card-img-top" alt="..." /> */}
            <Image src={usr.avatar} className="card-img-top" alt="img" width={200} height={200}></Image>
            <div className="card-body">
              <p className="card-text text-center fw-bold fs-5">{usr.name}</p>
              <p className="card-text text-center fw-bold fs-6 text-danger">CSR Page</p>
            </div>
          </div>
        })
      }
      </div>
      
    </div>
  );
}

export default Page;
