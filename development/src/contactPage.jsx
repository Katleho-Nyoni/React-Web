import {Helmet} from 'react-helmet'
import FooterSection from './footer';

export default function ContactPage(){
    return(
        <>
        <Helmet>
            <title>Contact Lord Nyoni</title>
        </Helmet>
            <div className='contact-info'>
                <p>Text Me on LinkedIn or Facebook:</p>
            </div>
        <FooterSection />
        </>
    );
}