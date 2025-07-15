import {Helmet} from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function TabProjects(){
    let x = "📖", y = "📊",z = "🛠";
return(
    <Tabs>
        <TabList>
            <Tab>{x}Books</Tab>
            <Tab>{y}Reports</Tab>
            <Tab>{z}Contributions</Tab>
        </TabList>

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
);
}

export default function ProjectPage(){
    return(
        <>
        <Helmet>
            <title>Projects | L.E Nyoni</title>
        </Helmet>
            <h1>Projects</h1>
            <div className='project-tabs'>
                <TabProjects />
            </div>
        </>
    );
}