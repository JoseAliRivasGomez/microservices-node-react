const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://localhost:4000/events", event).catch((err) => { //* POSTS
    console.log(err.message);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => { //* COMMENTS
    console.log(err.message);
  });
  axios.post("http://localhost:4002/events", event).catch((err) => { //* QUERY
    console.log(err.message);
  });
  axios.post("http://localhost:4003/events", event).catch((err) => { //* MODERATION
    console.log(err.message);
  });
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005"); //* EVENT BUS
});
