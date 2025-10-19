import Eagle from './assets/Eagle.webp'
import KatM from './assets/KATIEUM.svg'

export default function KatieumPage() {
    return (
        <>
            <div >
                {/* <img src={Eagle} alt="" /> */}
                <div >
                    <img src={KatM} alt="" />
                </div>
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