const express = require("express");
const app = express();
const fs = require("fs");

app.get("/blogs/:title", (req, res) => {
  const { title } = req.params;

  try {
    if (fs.existsSync(title)) {
      const content = fs.readFileSync(title, "utf-8");
      res.send(content);
    } else {
      res.status(404).send("Blog not found");
    }
  } catch (err) {
    res.status(500).send("Error reading file: " + err.message);
  }
});

app.use(express.json());
app.post("/blogs", function (req, res) {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).send("Title and content are required");
  }
  try {
    fs.writeFileSync(title, content);
    res.status(201).send("Blog created successfully");
  } catch (err) {
    res.status(500).send("Error writing file: " + err.message);
  }
});

app.put("/posts/:title", function (req, res) {
  const { title } = req.params;
  const { content } = req.body;
  if (!content) {
    return res.status(400).send("Content is required to update the blog");
  }

  try {
    if (fs.existsSync(title)) {
      fs.writeFileSync(title, content);
      res.send("Blog updated successfully");
    } else {
      res.status(404).send("Blog not found");
    }
  } catch (err) {
    res.status(500).send("Error updating file: " + err.message);
  }
});

app.delete("/blogs/:title", (req, res) => {
  const { title } = req.params;

  try {
    if (fs.existsSync(title)) {
      fs.unlinkSync(title);
      res.send("Blog deleted successfully");
    } else {
      res.status(404).send("Blog not found");
    }
  } catch (err) {
    res.status(500).send("Error deleting file: " + err.message);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
