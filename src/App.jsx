import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './RootLayout'
import RootPage from './RootPage.jsx'
import Coins from './components/Coins.jsx'

function App() {
  let bbrowser = createBrowserRouter([{
    path:'',
    element:<RootLayout/>,
    children:[
      {
        path:'',
        element:<RootPage/>
      }
      ,
      {
        path:'coins',
        element:<Coins/>
      },
      {
        path:'*',
        element:<RootPage/>
      }
    ]

  }])

  return (
    <div>
      <RouterProvider router={bbrowser}/>
    </div>
  )
}

export default App
