import { Link } from "react-router-dom";
import iLogo from './assets/iLogo.png';


export default function NavBar(){
    return(
        <>
            
            <nav>
                <Link to='/'>
                    <img src={iLogo} alt="Katium Logo" />
                </Link>
                
                
                <ul>
                    <li><Link to='/'> Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li> <Link to='/katieum'> Katieum</Link> </li>
                    <li> <Link to='/products'className="product-btn">Products</Link> </li>
                </ul>

                
            </nav>
        </>
    );
}