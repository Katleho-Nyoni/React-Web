import {Helmet} from 'react-helmet'
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FooterSection from './footer';
// import './components.css';

function SlinderNews(){
    return(
        <>
        <div className='slideshow'>
            <h1>SLIDESHOW</h1>
        </div>
        </>
    );
}

function TabProjects(){
    let x = "📖", y = "📊",z = "🛠";
return(
    <>
    <div className='col-6 tab p-5'>
        <ul className=''>
            <li className='tab'>{x} <b>Books</b> </li>
            <li className='tab'>{y} <b>Reports</b> </li>
            <li className='tab'>{z} <b>Contributions</b> </li>
        </ul>

        <div className='content'>
            <p>This section will include the books I have written alone or concurrently with other authors.</p>
        </div>
        <div className='content'>
            <p>Below are the reports I have written</p>
            <ol>
                <li><a href="">Employee's Satisfaction</a></li>
                <li><a href="https://rpubs.com/LordEagle/TSA1">Forecasting the Sales of Food & Beverages of RSA</a> </li>
            </ol>
        </div>
        <div className ='content'>
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
            <SlinderNews />
            <div className='project-tabs'>
                <TabProjects />
            </div>
            <MainProjects />
            <CurrentProject />
            <FooterSection />
        </>
    );
}