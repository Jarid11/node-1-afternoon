const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const messageController = require("./controllers/messages_controller");

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

const messageBaseUrl = "/api/messages";
app.post(messageBaseUrl, messageController.create);
app.get(messageBaseUrl, messageController.read);
app.put(`${messageBaseUrl}/:id`, messageController.update);
app.delete(`${messageBaseUrl}/:id`, messageController.delete);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
