import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello from vercel server" });
});

app.listen(8080, () => console.log("server is running on port 8080"));