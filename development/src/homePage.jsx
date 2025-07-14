import {Helmet} from 'react-helmet'
import { LavaLamp } from './fluidBlob';

function LandindDisplay(){
    return(
    <>
    <div className='Landing-Display'>
        <LavaLamp />
        <h1>Katleho Nyoni</h1>
        <p>is not just a name, it's a <b>Brand</b></p>
        <b>Worth Remembering!</b>
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
        <LandindDisplay />
        </>
    );
}