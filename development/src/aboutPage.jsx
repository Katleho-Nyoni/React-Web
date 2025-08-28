import {Helmet} from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FooterSection from './footer';

function AboutTab(){
    let x = "🦅",y = "💻", z = "☯";
    return(
        <>
        <div className='tab-section'>
            <Tabs>
            <TabList className='tab-list'>
                <Tab className='tab'>{x} <b>Personality</b></Tab>
                <Tab className='tab'>{y} <b>Tech-Stack</b></Tab>
                <Tab className='tab'>{z} <b>Beliefs</b></Tab>
            </TabList>

            <TabPanel className='tab-panel'>
                <p>My Personality</p>
            </TabPanel>
            <TabPanel className='tab-panel'>
                <div className='tech-stack'>
                    <ul>
                        <li>C/C++</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>LangGraph</li>
                        <li>LaTeX</li>
                        <li>MATLAB</li>
                        <li>NextJS</li>
                        <li>NodeJS/ExpressJS</li>
                        <li>R/RStudio</li>
                        <li>ReactJS</li>
                        <li>SQL/PostgresSQL</li>
                    </ul>
                </div>
            </TabPanel>
            <TabPanel className='tab-panel'>
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