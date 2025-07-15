import {Helmet} from 'react-helmet'

function LandingDisplay(){
    let a = "👑";
    return(
    <>
    <div className='Landing-Display'>
        <h1>Katleho Nyoni</h1>
        <p>is not just a name, it's a <b>Brand</b></p>
        <b>Worth Remembering!</b>
        <p>And this is not just my portfolio, but my identity as it incorporates my ideas, personality & everything inbetween.</p>
        <h4>A Universalist at Heart{a}</h4>
        <blockquote>Jack of all trades, master of none, though oftentimes better than a master of one.</blockquote>
    </div>
    <div>
        <h1>Currently Learning</h1>
    </div>
    <div className='Highlights'>
        {/* <p>I'm constantly learning, harnessing ideas & integrating different fields to implement my ideas. Below are the things I'm currently learning:</p> */}
        <div className='content-container'>
            <h3>Comp Sci Fundamentals</h3>
            <p>I have had an interest in Computer Science after I learned that it is more like an application of Mathematics. To find out more about my journey:</p>
            <button>Learn More</button>
        </div>
        <div className='content-container'>
            <h3>Software Eng & Dev</h3>
            <p>Upon my journey on building Fullstack applpications using various softwares, I have realized that I'm constantly trying to solve problems, and this is the beginning of it all.</p>
            <button>Learn More</button>
        </div>
        <div className='content-container'>
            <h3>Comp Sci Fundamentals</h3>
            <p>I have had an interest in Computer Science after I learned that it is more like an application of Mathematics. To find out more about my journey:</p>
            <button>Learn More</button>
        </div>
        <div className='content-container'>
            <h3>Software Eng & Dev</h3>
            <p>Upon my journey on building Fullstack applpications using various softwares, I have realized that I'm constantly trying to solve problems, and this is the beginning of it all.</p>
            <button>Learn More</button>
        </div>
    </div>
    </>

    );
}
export default function HomePage(){
    return(
        <>
        <Helmet>
            <title>Katleho Nyoni | Lord Eagle(L.E)</title>
        </Helmet>
        <LandingDisplay />
        </>
    );
}