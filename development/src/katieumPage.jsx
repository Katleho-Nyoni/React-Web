import Particles from './assets/Jumping-Particles.mp4'
import KatM from './assets/KATIEUM.svg'

export default function KatieumPage() {
    return (
        <>
            <div className='katieum-header'>
                <video src={Particles} autoPlay loop muted></video>
                <span >
                    <img src={KatM} alt="" />
                </span>
            </div>

            <div className='Highlights'>
                <div className='content-container'>
                    <h2>Documentation</h2>
                    <br />
                    <br />
                    <button>Read</button>
                </div>
                <div className='content-container'>
                    <h2>Mathematics</h2>
                    <br />
                    <br />
                    <button>Book</button>
                    {/* <button>Lessons</button> */}
                </div>

            </div>
        </>
    );
}