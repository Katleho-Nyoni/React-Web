import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const app = express();
app.use(express.json());

const uploadFolder = './uploads';

if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder);
}

const storage = multer.diskStorage({
    destination:uploadFolder,
    filename: (req,file,cb) =>{
        cb(null,Date.now() + '-' + file.originalname);
    }
});

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
        analysedFile: req.file.filename,});

       res.send(`File ${req.file.originalname} uploaded successfully!`);
});

const PORT = 5174;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});