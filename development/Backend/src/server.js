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
    filename: (req,res,cb) =>{
        cb(null,Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

let tracking = [];



app.use(cors({
    origin: 'http://localhost:8000',
    methods: ['GET', 'POST']
}));

// Test route
app.get('/hello', (req, res) => {
    res.send('Hello World! Server is running!');
});

// Upload dataset + generate dummy report
app.post('/upload', upload.single('dataset'), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded");
    }

    // 1) Save tracking info
    const reportName = `report-${req.file.filename}.html`;
    tracking.push({
        analysedFile: req.file.filename,
        correspondingReport: reportName
    });

    // 2) Create a dummy report (you'll replace this with real AI code later)
    const dummyReportContent = `
        <html>
        <body>
            <h1>Report for ${req.file.originalname}</h1>
            <p>Analysis completed successfully.</p>
        </body>
        </html>
    `;
    fs.writeFileSync(path.join(reportsFolder, reportName), dummyReportContent);

    res.send(`File ${req.file.originalname} uploaded and report generated!`);
});

// View all uploaded datasets and their reports
app.get('/uploads', (req, res) => {
    res.json(tracking);
});

// Download/view a specific report
app.get('/report/:filename', (req, res) => {
    const reportPath = path.join(reportsFolder, req.params.filename);

    if (!fs.existsSync(reportPath)) {
        return res.status(404).send("Report not found");
    }
    res.sendFile(path.resolve(reportPath));
});