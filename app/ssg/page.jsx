import Image from 'next/image';
import React from 'react';


const Page = async () => {
  console.log(process.env.NEXT_PUBLIC_urlDB, process.env.DB_KEY) 

  const fetchUserData = async ()=>{
    let res = await fetch(process.env.NEXT_PUBLIC_urlDB, {cache:'force-cache'}) //{caches:'force-store'} -> علشان تتأكد ان الصفحة شغاله -> SSG
    return res.json()
  }

  let userData = await fetchUserData()

  return (
    <div>
      <h1 className='alert alert-warning w-50 mx-auto my-3 text-center'>SSG</h1>
       <div className='d-flex justify-content-center gap-3 flex-wrap mx-auto' style={{width:'80%'}}>
        {
        userData?.map((usr)=> {
          return <div key={usr.id} className="card" style={{width: '18rem'}}>
            {/* <img src={usr.avatar} className="card-img-top" alt="..." /> */}
            <Image src={usr.avatar} className="card-img-top" alt="img" width={150} height={200}></Image>
            <div className="card-body">
              <p className="card-text text-center fw-bold fs-5">{usr.name}</p>
              <p className="card-text text-center fw-bold fs-6 text-warning">SSG Page</p>
            </div>
          </div>
        })
      }
      </div>
    </div>
  );
}

export default Page;
