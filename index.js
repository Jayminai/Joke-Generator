import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const url = "https://v2.jokeapi.dev/joke/Any?type=twopart";

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
function cap(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/getJoke", async (req, res) => {
    const userName = cap(req.body["name"]);
    try{
        const response = await axios.get(url);
        const result = response.data;
        res.render("index.ejs", {
            userName: userName,
            category: result.category,
            setup: result.setup,
            delivery: result.delivery
        });
    }
    catch(err){
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});