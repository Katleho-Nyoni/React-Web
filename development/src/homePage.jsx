import {Helmet} from 'react-helmet'
import FooterSection from './footer'
import HeroPicture from './assets/Eagle.webp'

function LandingDisplay(){
    let a = "👑";
    return(
    <>
        <div className='Hero-Section'>
            <img src={HeroPicture} alt=""/>
            <div className='Landing-Display'>
                <h1>Katleho Nyoni</h1> <br />
                <p>is not just a name, it's a</p>
                <p><b>Brand Worth Remembering!</b></p>
                <br />
                <h4>A Universalist at Heart{a}</h4>
                <blockquote>Jack of all trades, master of none, <br />
                    though oftentimes better than a master of one.</blockquote>
            </div>
        </div>
        <div className='section-intro'>
            <h1>Currently Learning</h1>
            <h3>This Website was built with dark mode in mind. If you can see this,
            <br />
             it means your device is in light/default mode, and you might not get the best of this website. Enjoy!</h3>
        </div>
        <div className='Highlights'>
            {/* <p>I'm constantly learning, harnessing ideas & integrating different fields to implement my ideas. Below are the things I'm currently learning:</p> */}
            <div className='content-container'>
                <h3>Comp Sci Fundamentals</h3>
                <p>Computer Science(CS) is just Applied Mathematics. I'm leveraging this to learn CS fundamentals including DSA & the MERN stack.</p>
                {/* <button>Learn More</button> */}
            </div>
            <div className='content-container'>
                <h3>Software Eng & Dev</h3>
                <p>Upon my journey on building Fullstack applpications using various softwares, I have realized that I'm constantly trying to solve problems, and this is the beginning of it all.</p>
                {/* <button>Learn More</button> */}
            </div>
            <div className='content-container'>
                <h3>Blender</h3>
                <p>Learning this 3D animation software will provide me with the skills to implement my project ideas.</p>
                {/* <button>Learn More</button> */}
            </div>
            <div className='content-container'>
                <h3>Artificial Intelligence(AI)</h3>
                <p>Constantly learning about cutting-edge Frameworks such AutoGen Studio and LangGraph to integrate AI solutions to real-world problems.</p>
                {/* <button>Learn More</button> */}
            </div>
        </div>
        {/* <FooterSection /> */}
    </>
    );
}

export default function HomePage(){
    return(
        <>
        <Helmet>
            <title>Katleho Nyoni</title>
        </Helmet>
        <LandingDisplay />
        </>
    );
}