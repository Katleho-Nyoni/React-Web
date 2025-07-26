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
        <script>
            const fileInput = document.getElementById('UploadedFile');
            const dataContainer = document.getElementById('dataUpload');

            dataUpload.addEventListener("submit", e => {
                e.preventDefault();

                const endpoint = "server.js";
                const formData = new FormData();

                formData.append("UploadedFile", fileInput.files[0]);

                fetch(endpoint,{
                    method:"POST",
                    body:formData
                }).catch(console.error);
            });
            
        </script>
        </>
    );
}