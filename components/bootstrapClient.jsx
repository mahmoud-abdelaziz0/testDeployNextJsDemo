'use client'
import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css'
const BootstrapClient = () => {
  useEffect(()=>{
      import('bootstrap/dist/js/bootstrap.bundle')
    },[])
  return (
    <div>
      
    </div>
  );
}

export default BootstrapClient;
