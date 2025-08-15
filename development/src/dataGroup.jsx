import { useState } from "react";
import SplashCursor from "./splashCursor";
import { getAuth, signOut } from "firebase/auth";

export default function DataGroup(){
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type !== "text/csv") {
            alert("Only CSV files are allowed!");
            e.target.value = ""; 
        return;
         }

        setSelectedFile(file);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file first!");
            return;
        }

        // Prepare form data
        const formData = new FormData();
        formData.append("dataset", selectedFile); // <-- must match server.js field name

        try {
            const response = await fetch("http://localhost:5000/uploads", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error("Upload failed");
            }

            const data = await response.text(); 
            alert("Upload success: " + data);
        } catch (err) {
            console.error(err);
            alert("Error uploading file");
        }
    };

    return(
        <>
        <SplashCursor />
        <h1>Welcome to DG Consulting</h1>      
        <button onClick={()=>signOut(getAuth())}>Sign Out</button>
        <div className="parent-container" id="dataUpload">
            <div className='container'>
                <input type="file" name="" id="UploadedFile" required onChange={handleFileChange} />
                <button type="submit" onClick={handleUpload}>Generate Report</button>
            </div>
        </div>
        </>
    );
}