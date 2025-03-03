import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Coffees from './Component/Page/Coffees.jsx'
import Home from './Component/Page/Home.jsx'
import CoffeesCards from './Component/Page/CoffeesCards.jsx'
import DashBoard from './Component/Page/DashBoard.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CoffeeDetails from './Component/Page/CoffeeDetails.jsx'
// import ErrorPage from './Component/Page/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    // errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('../categories.json'),
        children:[
          {
            path:'/',
            loader:()=>fetch('../coffees.json'),
            element:<CoffeesCards></CoffeesCards>
          },
          {
            path:'/category/:category',
            loader:()=>fetch('../coffees.json'),
            element:<CoffeesCards></CoffeesCards>
          }
        ]
      },
      {
        path: '/coffees',
        loader:()=>fetch('../coffees.json'),
        element: <Coffees></Coffees>
      },
      {
        path:'/details/:id',
        loader:()=>fetch('../coffees.json'),
        element:<CoffeeDetails></CoffeeDetails>
      },
      {
        path: 'dashboard',
        loader:()=>fetch('../coffees.json'),
        element: <DashBoard></DashBoard>
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
