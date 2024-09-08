const express = require('express');
const { randomBytes } = require('crypto');
const app = express();
const cors = require('cors');
const axios = require('axios');
app.use(express.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    console.log('Received POST request:', req.body);

    posts[id] = {id, title};

    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {
            id, 
            title
    }
    }); 

    console.log(id, title); 

    res.status(201).send(posts[id]);
});
 
app.post('/events', (req, res)=>{
    console.log('Reveived Eevent', req.body.type);

    res.send({});
});

app.listen(4000, () => { console.log('Listening on 4000')}); 