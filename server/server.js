const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

MongoClient.connect("mongodb://127.0.0.1:27017")
  .then((client) => {
    const db = client.db("guests");
    const bookingsCollection = db.collection("bookings");
    const bookingsRouter = createRouter(bookingsCollection); //need to set up the router still!!
    app.use("/api/bookings", bookingsRouter);
  })
  .catch(console.error);

app.listen(9000, function () {
  console.log("server is working");

//how to add the check in
// app.post('/api/bookings', (req, res) => {
//   const newData = req.body;
//   if (newData.hasOwnProperty("name") && newData.hasOwnProperty("email")) {
//     bookingsCollection
//       .insertOne(newData)
//       .then((result) => {
//         newData._id = result.insertedId
//         res.json(newData);
//       })
//       .catch((err) => {
//         console.error(err)
//         res.status(500)
//         res.json({status: 500, error: err})
//       })
//   } else {
//     res.status(400);
//     res.send("Please check that your booking contains a valid name & email.")
//   }


// })
});


//
