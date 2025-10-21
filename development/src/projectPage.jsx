import {Helmet} from 'react-helmet'
import { Link } from "react-router-dom";
import City from './assets/pexels-visionmonkeyandy-1034662.jpg'
import { useState } from 'react';

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
    let /*x = "📖",*/ y = "📊",z = "🛠";

    const [toggle,setToggle] = useState();
    
        function updateToggle(i){
            setToggle(i);
    }

return(
    <>
    <div className='tab-section'>
        <ul className='tab-list'>
            {/* <li className='tab' onClick={()=>updateToggle(1)}>{x} <b>Books</b> </li> */}
            <li className='tab' onClick={()=>updateToggle(1)}>{y} <b>Reports</b> </li>
            <li className='tab' onClick={()=>updateToggle(2)}>{z} <b>Contributions</b> </li>
        </ul>

        {/* <div className={toggle===1?'show-content':'content'}>
            <p>This section will include the books I have written alone or concurrently with other authors.</p>
        </div> */}
        <div className={toggle===1?'show-content':'content'}>
            <p>Below are the reports I have written:</p>
            <span className='articles'>
                <p>1. Will I Eventually be Employed? A Mathematical Approach</p>
                <p>2. Forecasting the sales of Food & Beverages of RSA</p>
                <p>3. Employee's Satisfaction</p>
            </span>
        </div>
        <div className={toggle===2?'show-content':'content'}>
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
            <h5>FullStack</h5>
            <p>This is a team of AI Agents that take your dataset(csv) and 
                generate a pdf Report.</p>
            <button>Learn More</button>
            </div>
        </div>
        </>
    );
}

function CurrentProject(){
    return(
        <>
        <div className='current-project'>
            {/* <img src={City} alt=""/> */}
            <span className='card-area'>
                <div className='card-container'>
                    <h3>Katieum</h3>
                    <h5>Educational</h5>
                    <p>Platform to teach grade 10 to 12 Mathematics using animation. Physical Science to join later.</p>
                    <button>Learn More</button>
                </div>
                <div className='card-container'>
                    <h3>Katieum's Web App</h3>
                    <h5>Client Only</h5>
                    <p>Web app that would provide learners with math lessons & other resources without having to login.</p>
                    <button>Visit Site</button>
                </div>
                <div className='card-container'>
                    <h3>Learning Angular</h3>
                    <h5>FullStack</h5>
                    <p>Learning Angular.JS through a tutorial building a Buy & Sell store.</p>
                    <button>Learn More</button>
                </div>
                <div className='card-container'>
                    <h3>Learning Next.JS</h3>
                    <h5>FullStack</h5>
                    <p>Learning Next.JS through a tutorial building an e-commerce store.</p>
                    <button>Learn More</button>
                </div>
                <div className='card-container'>
                    <h3>Data Group Consulting</h3>
                    <h5>FullStack</h5>
                    <p>This is a team of AI Agents that take your dataset(csv) and generate a pdf Report.</p>
                    <button>Learn More</button>
                </div>
                <div className='card-container'>
                    <h3>My/This Website</h3>
                    <h5>Client Only</h5>
                    <p>This is a personal website built to showcase my projects and skills.</p>
                    <button>Learn More</button>
                </div>
            </span>
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
            <CurrentProject />
            <div className='project-tabs'>
                <TabProjects />
            </div>
            
        </>
    );
}