import Cartwidget from "./Cartwidget"
import {Link} from "react-router-dom"
const NavBar = () => {
  return (
          <div>
          <nav className='navBar'>
            <Link to= {"/"}><img className='logo' src= "/logo7.png" alt="logo" /></Link> 
            <Link to= {"/"}> <p className="title">MI FERIA HOME</p></Link>
            <li className='navList'>
              <Link to= {"/category/Macetas"}>Macetas</Link>
              <Link to= {"/category/Combos"}>Combos</Link>
            </li>
            <Link to= {"/cart"} ><Cartwidget/></Link> 
          </nav>
        </div>
  )
}
export default NavBar