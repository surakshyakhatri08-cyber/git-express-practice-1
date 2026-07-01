import express from 'express';
import http from 'http';
import useRoutes1 from './routes/user.routes.js';
import useRoutes2 from './routes/category.routes.js';


//creating express app instance
const app = express();
app.use(express.json());

//creation http server
const server = http.createServer(app);

//app.method(path, handler)
// app.get("/", (req, res) => {
//     res.send("<h1>Hello from Server</h1>");
// });

//using json
app.get("/", (req, res) => {
        res.json({
        message: "Server is up & running",
        success: true,
        data: null
    });
});

//using routes
app.use('/users', useRoutes1);
app.use('/category', useRoutes2);


server.listen(8000, () => {
    console.log(`Servrer is running at http://localhost:8000`);
    console.log("Press ctrl+c to close the server");
});


//req.params => route parameter => {}
    //localhost:8000/users/1 => {id:1}
    //localhost:8000/users/2 => {id:2}
    //localhost:8000/users/200 => {id:200}

//req.query => query parameter => {}
    //localhost:8000/users?name=surakshya&page=2&limit=10 => {name:'surakshya', page:'2', limit: '10'}
