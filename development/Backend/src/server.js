import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());

const tracking = [{
    analysedFile: '',
    correspondingReport: ''
}]

app.use(cors({
    origin: 'http://localhost:8000',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.post('/api/uploads', (req,res)=>{ // Store The Dataset
    req.forEach((file) => {
        tracking.push({
            analysedFile: file.originalname,
            correspondingReport: ''
        });
    });
    res.send('This is a POST endpoint!');
});

app.post('/api/agent-analyser',(req,res)=>{
    // Sends the file to the AI Agent for analysis
})
app.get('/api/reports', (req,res)=>{ // Get Report from AI Agent
    res.send('Hello World! This is a GET endpoint!');
});



// app.put('/hello', (req,res)=>{
//     res.send('Hi! This is a PUT endpoint!');
// });



app.listen(8000, function(){
    console.log('Server is running on port 8000');  
});