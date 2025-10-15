import {Helmet} from 'react-helmet'
import { Link } from "react-router-dom";
import HeroPicture from './assets/Eagle.webp'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FooterSection from './footer';
import { useState } from 'react';
// import './components.css';

function SlinderNews(){
    return(
        <>
        <div className='slideshow'>
            <img src={HeroPicture} alt=""/>
            <div className='content-box'>
                <h1>SLIDESHOW</h1>
            </div>
        </div>
        </>
    );
}

function TabProjects(){
    let x = "📖", y = "📊",z = "🛠";

    const [toggle,setToggle] = useState();
    
        function updateToggle(i){
            setToggle(i);
    }

return(
    <>
    <div className='tab-section'>
        <ul className='tab-list'>
            <li className='tab' onClick={()=>updateToggle(1)}>{x} <b>Books</b> </li>
            <li className='tab' onClick={()=>updateToggle(2)}>{y} <b>Reports</b> </li>
            <li className='tab' onClick={()=>updateToggle(3)}>{z} <b>Contributions</b> </li>
        </ul>

        <div className={toggle===1?'show-content':'content'}>
            <p>This section will include the books I have written alone or concurrently with other authors.</p>
        </div>
        <div className={toggle===2?'show-content':'content'}>
            <p>Below are the reports I have written</p>
            <ol>
                <li><a href="">Employee's Satisfaction</a></li>
                <li><a href="https://rpubs.com/LordEagle/TSA1">Forecasting the Sales of Food & Beverages of RSA</a> </li>
            </ol>
        </div>
        <div className={toggle===3?'show-content':'content'}>
           <p> I haven't contributed to any open-source project yet.</p>
        </div>
    </div>
    </>
);
}

function MainProjects(){
    return(
        <>
        <div className='main-project'>
            <div className='card-container'>
            <h3>Data Group Consulting</h3>
            <h5>Fullstack</h5>
            <p>This is a team of AI Agents that take your dataset(csv) and 
                generate a pdf Report.</p>
            <button>Learn More</button>
            <Link to='/a/login'><button>Use Demo</button></Link>
            </div>
        </div>
        </>
    );
}

function CurrentProject(){
    return(
        <>
        <div className='current-project'>
            {/* <img src={HeroPicture} alt=""/> */}
            <h1>Currently Working on</h1>
            <div className='card-container'>
            <h3>Data Group Consulting</h3>
            <h5>Fullstack</h5>
            <p>This is a team of AI Agents that take your dataset(csv) and 
                generate a pdf Report.</p>
            <button>Learn More</button>
            <button><Link to='/a/login'>Use Demo</Link></button>
            </div>
        </div>
        </>
    );
}

export default function ProjectPage(){
    return(
        <>
        <Helmet>
            <title>Projects | Katleho Nyoni</title>
        </Helmet>
            {/* <h1>Projects</h1> */}
            {/* <SlinderNews /> */}
            <div className='project-tabs'>
                <TabProjects />
            </div>
            {/* <MainProjects /> */}
            <CurrentProject />
            <FooterSection />
        </>
    );
}