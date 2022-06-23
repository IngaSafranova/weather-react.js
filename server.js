
    import dotenv from 'dotenv';
    import express from 'express';
    
    let config = dotenv.config();

    export const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
    const app = express();

    app.use(express.json());
    app.use(express.static('public'));

    app.post('/weather',function(req,res){

    });

    app.listen(3000,()=>{
        console.log('Server started')
    })
