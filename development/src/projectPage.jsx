import {Helmet} from 'react-helmet'
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FooterSection from './footer';

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
    <div className='tab-section'>
        <Tabs>
        <TabList className='tab'>
            <Tab>{x} <b>Books</b> </Tab>
            <Tab>{y} <b>Reports</b> </Tab>
            <Tab>{z} <b>Contributions</b> </Tab>
        </TabList>

        <TabPanel>
            <p>This section will include the books I have written alone or concurrently with other authors.</p>
        </TabPanel>
        <TabPanel>
            <p>Below are the reports I have written</p>
            <ol>
                <li><a href="">Employee's Satisfaction</a></li>
                <li><a href="https://rpubs.com/LordEagle/TSA1">Forecasting the Sales of Food & Beverages of RSA</a> </li>
            </ol>
        </TabPanel>
        <TabPanel>
           <p> I haven't contributed to any open-source project yet.</p>
        </TabPanel>
    </Tabs>
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
            <button><Link to='/a/login'>Use Demo</Link></button>
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
            <title>Projects | L.E Nyoni</title>
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