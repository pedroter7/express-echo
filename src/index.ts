import express from 'express'

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.post("/echo", (req, res) => {
  const respBody = {
    echoVersion: 1,
    message: req.body
  }

  res.json(respBody);
});

app.listen(port, () => console.log(`Echo server listening on port ${port}`));