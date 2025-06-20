import { useState } from 'react'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth';
import './App.css'
import {login,logout} from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Outlet} from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch();

  useEffect(() => {
   authService.getCurrentUser()
   .then((userData)=>{
    if(userData){
      dispatch(login({userData}));
    }
    else{
      dispatch(logout());
    }
   })
   .finally(()=>{setLoading(false)}); 
  },[])
  return !loading ? (
    <div className='min-h-screen 
    flex flex-wrap content-between 
    bg-gray-900'>
    <div className='w-full block'>
      <Header/>
      <main>
      {/*Todo /*<Outlet/>*/}
      </main>
      <Footer/>
    </div>
    Test
    </div>
  ) : (null)
}

export default App
