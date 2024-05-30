const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  try {
    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );

    // If entry is null, redirect to a 404 page or return an error message
    if (!entry) {
      return res.status(404).send("URL Not Found");
    }

    // If entry is found, redirect to the redirectURL
    res.redirect(entry.redirectURL);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
