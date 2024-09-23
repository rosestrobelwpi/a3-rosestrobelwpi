const express = require("express");
const cookieSession = require("cookie-session");
const path = require("path");
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uri = `mongodb+srv://rosestrobel:uyrwe45@a3.5wbb0.mongodb.net/?retryWrites=true&w=majority&appName=a3`;
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

connectToMongoDB();

app.use(cookieSession({
    name: 'user',
    keys: ['username', 'password'],
    maxAge: 24 * 60 * 60 * 1000 //24 hours
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', async (req, res) => {
    console.log('Login attempt:', req.body);

    const { username, password } = req.body;

    try {
        const database = client.db('users');
        const usersCollection = database.collection('usernames and passwords');

        const user = await usersCollection.findOne({ username: username });

        if (user) {
            if (user.password === password) {
                req.session.login = true;
                req.session.username = username; 
                console.log('Login successful');
                res.redirect('/'); 
            } else {
                console.log('Incorrect password');
                res.sendFile(path.join(__dirname, 'public', 'home.html')); 
            }
        } else {
            console.log('User not found');
            res.sendFile(path.join(__dirname, 'public', 'home.html'));
        }
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

app.post('/signup', async (req, res) => {
    console.log('Signup attempt:', req.body);

    const { username, password } = req.body;

    try {
        const database = client.db('users'); 
        const usersCollection = database.collection('usernames and passwords'); 

        const existingUser = await usersCollection.findOne({ username: username });

        if (existingUser) {
            console.log('User already exists');
            res.sendFile(path.join(__dirname, 'public', 'home.html'));
        } else {

            await usersCollection.insertOne({ username: username, password: password });
            console.log('Signup successful');
            res.redirect('/'); 
        }
    } catch (err) {
      //  console.error("Error during signup:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/tasks", async (req, res) => {
    const username = req.session.username;

    try {
        const database = client.db('users');
        const tasksCollection = database.collection('tasks');
        const tasks = await tasksCollection.find({ username }).toArray();

        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});


app.post("/addTask", async (req, res) => {
    const { task } = req.body;
    const username = req.session.username;

    try {
        const database = client.db('users');
        const tasksCollection = database.collection('tasks');
        const result = await tasksCollection.insertOne({ username: username, task: task });
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});


app.post('/deleteTask', async (req, res) => {
    const { taskId } = req.body;
    const username = req.session.username;

    try {
        const database = client.db('users');
        const tasksCollection = database.collection('tasks');
        await tasksCollection.deleteOne({ _id: new ObjectId(taskId), username });

    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});


app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});
