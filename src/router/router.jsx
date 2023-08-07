import { createBrowserRouter } from 'react-router-dom';
import Index from '../pages/Index/Index';
import Cities from  '../pages/Cities/Cities';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Main from '../layouts/Main/Main';
import CityDetail from '../pages/CityDetail/CityDetail';
import NotFound from '../pages/NotFound/NotFound';

const router = createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      children: [
        {
          path:'/',
          element: <Index/>,
          
        },
        {
          path:'/cities',
          element: <Cities/>,
          
        }
        ,
        {
          path:'/login',
          element: <Login/>,
          
        }
        ,
        {
          path:'/signup',
          element: <SignUp/>,
          
        },
        {
          path:'/cities/:id',
          element: <CityDetail/>,
          
        }
      ]
      
    },
    {
      path:'*',
      element: <NotFound/>,

    }
  ]);

  export default router;