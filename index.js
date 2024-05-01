//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
//var authorityStatus;
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req,res,next)=> {
   
//     authorityStatus=req.body.password==="mukuldev"?true:false;
//     next();
// });
function authorityStatus(req){
if (req.body.password==="abhishekherimeth")
return true;
else
return false;
}
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname+'/public/index.html');

});

app.post("/check", (req, res) => {

    if (authorityStatus(req)) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.sendFile(__dirname + "/public/index.html");

    }
})
