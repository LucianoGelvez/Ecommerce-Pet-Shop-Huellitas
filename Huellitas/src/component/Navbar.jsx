import React from 'react'
import Logo from '../images/logo.webp'
import Busqueda from '../images/especiales/lupa.png'
import Favoritos from '../images/especiales/corazon.png'
import Carrito from '../images/especiales/carrito.png'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import '../style/componentStyle/NavbarStyle.css'

const Navbar = () => {
  return (
    <div className='container'>
      <div><Link to={routes.home}><img src={Logo} alt="Logo"  width={"80px"}/></Link></div>  
      <div className='container_redirectable'>
        <Link to={routes.service}> Inicio</Link>
        <Link to={routes.service}> Servicios</Link>
        <Link to={routes.products}> Productos</Link>
        <Link to={routes.contact}> Contacto</Link>
      </div>
      <div className='container_imagesRedirectables'>
      <div><Link to={routes.home}><img src={Busqueda} alt="Busqueda" width={"25px"}/></Link></div>
      <div><Link to={routes.favs}><img src={Favoritos} alt="Favoritos" width={"25px"}/></Link></div>
      <div><Link to={routes.cart}><img src={Carrito} alt="Carrito" width={"25px"}/></Link></div>
      </div>
    </div>
  )
}

export default Navbar