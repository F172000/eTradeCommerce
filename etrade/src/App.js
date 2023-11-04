import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/home';
import Newsletter from './components/newletter';
function App() {
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
    <main >
      <ToastContainer draggable={false}/>
     <RouterProvider router={router}/>
    </main>
  );
}

export default App;
