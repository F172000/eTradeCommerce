import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./css/style.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/home';
import Newsletter from './components/newletter';
import { useState,useEffect } from 'react';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup the timeout if the component unmounts
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    }
    ,
    {
      path:'/newsletter',
      element:<Newsletter/>
    }
  ])
  return (
    <>
    {isLoading ? (
      <div id="spinner" 
      class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-grow text-blue" role="status"></div>
  </div>
        ):(
    <main >
      <ToastContainer draggable={false}/>
     <RouterProvider router={router}/>
    </main>
  )
}
</>
  )
}
export default App;
