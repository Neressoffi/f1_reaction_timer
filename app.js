const express = require("express");
const mongoose = require("mongoose");
const postRoute = require("./routes/postRoute.js");
const commentRoute = require("./routes/commentRoute.js");
const userRoute = require("./routes/userRoute.js");

const app = express();
const port = 3003;

mongoose.connect("mongodb://127.0.0.1:27017/apinode");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/posts", postRoute);
app.use("/", commentRoute);
app.use("/users", userRoute);

app.listen(port, () => console.log(`Listening on : ${port}`));