import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Components/Home'
//import { About } from './Components/About'
const LazyAbout = React.lazy(() => import('./components/About'))
import { Navbar } from './Components/Navbar'
import { OrderSummary } from './Components/OrderSummary'
import { NoMatch } from './Components/NoMatch'
import { Products } from './Components/Products'
import { Featured } from './Components/Featured'
import { NewProducts } from './Components/NewProducts'
import { Users } from './Components/Users'
import { UserDetails } from './Components/UserDetails'
import { Admin } from './Components/Admin'
import { Profile } from './Components/Profile'
import { AuthProvider } from './Components/Auth'
import { Login } from './Components/Login'
import { RequireAuth } from './Components/RequireAuth'
//import ProtectedRoutes from './util/ProtectedRoute'

function App() {
  

  return (
    <AuthProvider>
        <Navbar />
        <Routes>
           <Route path = '/' element = {<Home />}></Route>
          <Route path = 'about' element = {<React.Suspense fallback= 'Loading...'> <LazyAbout /> </React.Suspense>}></Route>
           <Route path = 'ordersummary' element = {<OrderSummary />}></Route>
           <Route path = '*' element = {<NoMatch />}></Route>
           <Route path = 'products' element = {<Products />}>
              <Route index element = {<Featured />}/>
              <Route path = 'featured' element = { <Featured />}></Route>
              <Route path = 'newproducts' element = { <NewProducts />}></Route>
           </Route>
           <Route path = 'users' element = {<Users />}>
              <Route path = ':userId' element = {<UserDetails />}></Route>
              <Route path = 'admin' element = {<Admin />}></Route>
           </Route>  
           <Route path = 'profile' element = {<RequireAuth> <Profile /> </RequireAuth>}></Route>
           <Route path = 'login' element = {<Login />}></Route>
        </Routes>
    </AuthProvider>  
  )

      { /* <BrowserRouter>
         <Routes>
            <Route  path = "/login" element = {<Login1 />} />
            <Route element = {<ProtectedRoutes />} >
                 <Route  path = "/home" element = {<Hpme1 />} />
                 <Route  path = "/profile" element = {<Profile1 />} />
            </Route>
         </Routes>
    </BrowserRouter>  */ }
  
}

export default App
