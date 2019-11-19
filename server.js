const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { decode } = require("querystring");
const { updateDb } = require("./myModule");

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

const clientDir = __dirname + '\\client\\';

app.get('/', (request, response) => response.sendFile(clientDir + 'index.html'));


app.post('/', (request,response) => {
    let query1=request.body.name;
    let query2=request.body.email;
    let query3=request.body.message;
    let result= query1 +" "+ query2 +" "+ query3;
    
    console.log(result);
    updateDb(query2,query1,query3, "eika", "WESWEB");
    return response.redirect("/");
    
});

const port=3000;
const host= 'localhost';

app.listen(port,host, function f() {
    console.log(`listening att http://${host}:${port}`);
});

console.log("Erika' personal website runnning on port 3000");