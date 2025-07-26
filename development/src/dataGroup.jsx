import SplashCursor from "./splashCursor";
import { getAuth, signOut } from "firebase/auth";

export default function DataGroup(){
    return(
        <>
        <SplashCursor />
        <h1>Welcome to DG Consulting</h1>      
        <button onClick={()=>signOut(getAuth())}>Sign Out</button>
        <div className="parent-container" id="dataUpload">
            <div className='container'>
                <input type="file" name="" id="UploadedFile" required />
                <button type="submit">Generate Report</button>
            </div>
        </div>
        </>
    );
}