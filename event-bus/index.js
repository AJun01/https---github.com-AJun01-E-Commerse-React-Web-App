const express = require('express');
const bodyParser = require('body-parser');
const axios  = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
    const event  = req.body;

    events.push(event);

    axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log('Cannot reach server port 4000');
  });
    axios.post('http://localhost:4001/events', event).catch((err) => {
    console.log('Cannot reach server port 4001');
  });
    axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log('Cannot reach server port 4002');
  });
    axios.post('http://localhost:4003/events', event).catch((err) => {
    console.log('Cannot reach server port 4003');
  });
  

});
  
app.get('/events', (req, res) => {
    res.send(events);
});

app.listen(4005, () =>{

    console.log('Listening on 4005');
     
}) 
