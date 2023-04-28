
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Service from './pages/Service'
import SimpleProduct from './pages/SimpleProduct'
import CheckOut from './pages/CheckOut'
import Cart from './pages/Cart'
import Favs from './pages/Favs'
import PurchaseSummary from './pages/PurchaseSummary'
import Navbar from './component/Navbar'

function App() {
 
  return (
    <div>
      <Navbar/>
      <h1>pet shop</h1>
      
   
   <Routes>
      <Route path={routes.home} element={<Home/>}/>
      <Route path={routes.contact} element={<Contact/>}/>
      <Route path={routes.products} element={<Products/>}/>
      <Route path={routes.service} element={<Service/>}/>
      <Route path={routes.simpleProduct} element={<SimpleProduct/>}/>
      <Route path={routes.checkout} element={<CheckOut/>}/>
      <Route path={routes.cart} element={<Cart/>}/>
      <Route path={routes.favs} element={<Favs/>}/>
      <Route path={routes.purchaseSummary} element={<PurchaseSummary/>}/>
   </Routes>
    </div>
  )
}

export default App
