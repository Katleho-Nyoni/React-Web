import {Helmet} from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FooterSection from './footer';

function AboutTab(){
    let x = "🦅",y = "💻", z = "☯";
    return(
        <>
        <div className='col-6 tab p-5'>
            <ul className='tab-list'>
                <li className='tab'>{x} <b>Personality</b></li>
                <li className='tab'>{y} <b>Tech-Stack</b></li>
                <li className='tab'>{z} <b>Beliefs</b></li>
            </ul>

            <div className='content'>
                <h3>My Personality</h3>
                <p>Something about my personality</p>
            </div>
            <div className='content'>
                <h3>Tech-Stack</h3>
                <p>Something about my tech-stack</p>
                            {/* <ul>
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
                            </ul> */}
            </div>
            <div className='content'>
                <h3>My Beliefs</h3>
                <p>Something about my Beliefs</p>
            </div>
        </div>
        </>
    );
}

export default function AboutPage(){
    return(
        <>
        <Helmet>
            <title>About Lord Eagle</title>
        </Helmet>
            <div className='about-section'>
                <p>Katleho Nyoni is also an author with the pen name "Lord Eagle". 
                His contributions not only span teaching, technology and the arts,
                but are also rooted in philosophy and UBUNTU.</p>
                <AboutTab />
            </div>
            <FooterSection />
        </>
    );
}