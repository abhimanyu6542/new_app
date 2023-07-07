import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './feature/shared/components/Loader';
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
  return (
    <>
      <div className="App">
        {' '}
        {
          loading ? <Loader />: <Outlet />
        }
      </div>
    </>
  );
}

export default App;
