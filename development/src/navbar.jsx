import { Link } from "react-router-dom";
import {Icon, InlineIcon} from "@iconify/react"
// import home from "@iconify-icons/mdi/home"

export default function NavBar(){
    return(
        <nav>
            <ul>
                <li><Link to='/'> Home</Link></li>
                {/* <li><Link to='/'> <Icon icon={home}/> Home</Link></li> */}
                <li><Link to='/about'>About</Link></li>
                {/* <li><Link to='/about'><Icon icon={about}/> About</Link></li> */}
                <li><Link to='/contact'>Contact</Link></li>
                {/* <li><Link to='/contact'><Icon icon={contact}/> Contact</Link></li> */}
                <li><Link to='/projects'>Projects</Link></li>
                {/* <li><Link to='/projects'><Icon icon={project}/> Projects</Link></li> */}
            </ul>
        </nav>
    );
}