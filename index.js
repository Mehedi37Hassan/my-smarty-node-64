const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my personal smarty pant!! With auto restart')
});
const users = [

    { id: 1, name: 'sagor', email: 'sagor@gmail.com', phone: '01761157834' },
    { id: 2, name: 'mehedi', email: 'mehedi@gmail.com', phone: '01761157834' },
    { id: 3, name: 'kabir', email: 'kabir@gmail.com', phone: '01761157834' },
    { id: 4, name: 'mamun', email: 'mamun@gmail.com', phone: '01761157834' },
    { id: 5, name: 'rayhan', email: 'rayhan@gmail.com', phone: '01761157834' },

]
app.get('/users', (req, res) => {
    // console.log('query', req.query);
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }
}),
    app.get('/users/:id', (req, res) => {
        console.log(req.params);
        // const id = req.params.id;
        const id = parseInt(req.params.id);
        // const user = users[id];
        // const user = users.find(u => u.id == id);
        const user = users.find(u => u.id === id);
        res.send(user);
    });

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
    // res.send('post method success')
})

app.listen(port, () => {
    console.log('Listing to port', port);
})