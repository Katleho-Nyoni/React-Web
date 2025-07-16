import {Helmet} from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FooterSection from './footer';

function AboutTab(){
    let x = "🦅",y = "💻", z = "☯";
    return(
        <>
        <div className='tab-section'>
            <Tabs>
            <TabList className='tab'>
                <Tab>{x} <b>Personality</b></Tab>
                <Tab>{y} <b>Tech-Stack</b></Tab>
                <Tab>{z} <b>Beliefs</b></Tab>
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
        </div>
        </>
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
            <FooterSection />
        </>
    );
}