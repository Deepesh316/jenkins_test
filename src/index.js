const express = require("express");
const app = express();

app.get("/message", (req, res) => {
  res.send("A sample message from my application");
});

app.get("/media", (req, res) => {
  const response = {
    podcasts: [
      {
        description: "some text",
        id: 574,
        title: "Why long-term value is a winning bet",
        media: "podcast",
        publishedDate: "2018-12-19T18:00:00.000Z",
        isLive: true,
        isDeleted: false,
        link: "https://podcasts.com/574",
        createdAt: "2018-12-20T06:30:00.618Z",
        updatedAt: "2019-01-31T06:30:00.864Z"
      }
    ],
    total: 1
  };

  if (response.podcasts.length > 0) {
    res.send(response);
  } else {
    const errorObj = {
      httpCode: 404,
      message: "NOT_FOUND",
      description: "The resource referenced by request does not exists.",
      details: "Podcast is not available"
    };
    res.status(404);
    res.send(errorObj);
  }
});

app.listen(3001, () => {
  console.log("Application listening on port 3001");
});

module.exports = app;
