const express = require('express');


const app = express();


app.get("/check", (req, res) => {
    res.json({'message': 'Sakhshi'});
})


app.listen(8000, () => {
    console.log("Server running on port 8000")
});