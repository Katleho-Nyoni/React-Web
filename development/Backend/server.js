import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const app = express();
app.use(express.json());

const uploadFolder = './uploads';
const databaseFolder = './database';

if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder);

}
if (!fs.existsSync(databaseFolder)) {
    fs.mkdirSync(databaseFolder);
}

const storage = multer.diskStorage({
    destination:uploadFolder,
    filename: (req,file,cb) =>{
        cb(null, file.originalname);
    }
});

// const uploadedFile = ${path.basename(__filename)};
// fs.renameSync(`./database/${uploadedFile}`, `./database/dataset`);

const upload = multer({ storage });

let tracking = [];



app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
}));

// Test route
app.get('/hello', (req, res) => {
    res.send('Hello World! Server is running!');
});

// Upload dataset 
app.post('/uploads', upload.single('dataset'), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded");
    }

    // 1) Save tracking info
    tracking.push({
        analysedFile: req.file.filename,
        uploadedAt: new Date()    
    });

    const destPath = path.join(databaseFolder, req.file.filename);
    fs.copyFile(req.file.path, destPath, (err) => {
        if (err){
            console.error('Error copying file:', err);
            return res.status(500).send('Error copying file to database folder');
        }
     res.send(`${req.file.originalname} uploaded successfully!`);
})
});

const PORT = 5174;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

