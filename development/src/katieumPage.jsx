import Particles from './assets/Jumping-Particles.mp4'
import KatM from './assets/KATIEUM.jpg'

export default function KatieumPage() {
    return (
        <>
            <div className='katieum-header'>
                <video src={Particles} autoPlay loop muted></video>
                <span >
                    <a href="https://katieum.co.za" target="_blank" rel="noopener noreferrer">
                        <img src={KatM} alt="Katieum Logo" />
                    </a>
                </span>
            </div>

            <div className='Highlights'>
                <div className='content-container'>
                    <h2>Documentation</h2>
                    <br />
                    <br />
                    <button onClick={() => window.open("https://github.com/E4Katieum/Documentation", "_blank")}>Read</button>
                </div>
                <div className='content-container'>
                    <h2>Mathematics</h2>
                    <br />
                    <br />
                    <button onClick={() => window.open("https://e4katieum.github.io/Mathematics", "_blank")}>Book</button>
                </div>

            </div>
        </>
    );
}