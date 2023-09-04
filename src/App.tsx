import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home/Home'
import Users from './pages/Users/Users'
import Products from './pages/Products/Products'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Login from './pages/Login/Login'

// styles
import './styles/global.scss'

// basic louyout for pages
const Layout = () => (
  <div className='main'>
    <Navbar />
    <div className='container'>
      {/* Menu */}
      <div className='menuContainber'>
        <Menu />
      </div>
      {/* Content */}
      <div className='contentContainber'>
        <Outlet />
      </div>
    </div>
    {/* Footer */}
    <Footer />
  </div>
)

function App() {
  // create router instance
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/users',
          element: <Users />,
        },
        {
          path: '/products',
          element: <Products />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
