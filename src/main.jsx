import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Error from './components/Error.jsx'
import Home from './components/Home.jsx'
import BookDetails from './components/BookDetails.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import AddBook from './components/AddBook.jsx'
import BooksByCategory from "./components/BooksByCategory.jsx"
const appRouter= createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/browse-books",
        element: <BrowseBooks />,
        
      },
      {
        path:"/books/:category",
        element: <BooksByCategory />

      },
      {
        path: "/Add-book",
        element: <AddBook />
      },
      {
        path:"/book/:id",
        element:<BookDetails />
      }
    ],
    errorElement: <Error />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
