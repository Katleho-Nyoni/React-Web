import {Helmet} from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function AboutTab(){
    let x = "🦅",y = "💻", z = "☯";
    return(
        <Tabs>
            <TabList>
                <Tab>{x}Personality</Tab>
                <Tab>{y}Tech-Stack</Tab>
                <Tab>{z}Beliefs</Tab>
            </TabList>

            <TabPanel>
                <p>My Personality</p>
            </TabPanel>
            <TabPanel>
                <ul>
                    <li>MS Office Suite</li>
                    <li>C/C++</li>
                    <li>CSS</li>
                    <li>LaTeX</li>
                    <li>Others</li>
                </ul>
            </TabPanel>
            <TabPanel>
                <p>A self-proclaimed Philosopher at heart.</p>
            </TabPanel>
        </Tabs>
    );
}

export default function AboutPage(){
    return(
        <>
        <Helmet>
            <title>About | L.E Nyoni</title>
        </Helmet>
            <h1>About Me</h1>
            <div className='about-tabs'>
                <AboutTab />
            </div>
        </>
    );
}