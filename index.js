require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://bossUser:pHocpf4vTW2Dg3Cr@cluster0.ylidorg.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    const db = client.db("simple-pc-builder");
    const featuredCollection = db.collection("featured");
    const motherboardCollection = db.collection("motherboard");
    const ramCollection = db.collection("ram");
    const cpuCollection = db.collection("cpu");
    const psuCollection = db.collection("psu");
    const storageCollection = db.collection("storage");
    const monitorCollection = db.collection("monitor");
    const otherCollection = db.collection("other");

    app.get("/featureds", async (req, res) => {
      console.log("inside featured");
      const cursor = featuredCollection.find({});
      const featured = await cursor.toArray();

      res.send({ status: true, data: featured });
    });

    app.get("/rams", async (req, res) => {
      console.log("inside ram");
      const cursor = ramCollection.find({});
      const featured = await cursor.toArray();

      res.send({ status: true, data: featured });
    });

    app.get("/ram/:id", async (req, res) => {
      console.log("inside ram id ");
      const id = req.params.id;
      console.log(id);

      const result = await ramCollection.findOne({
        _id: new ObjectId(id),
      });
      console.log(result);
      res.send(result);
    });

    app.get("/powerSupplyUnits", async (req, res) => {
      console.log("inside psu");
      const cursor = psuCollection.find({});
      const featured = await cursor.toArray();

      res.send({ status: true, data: featured });
    });

    app.get("/powerSupplyUnit/:id", async (req, res) => {
      console.log("inside psu id ");
      const id = req.params.id;
      console.log(id);

      const result = await psuCollection.findOne({
        _id: new ObjectId(id),
      });
      console.log(result);
      res.send(result);
    });

    app.get("/monitors", async (req, res) => {
      console.log("inside monitor");
      const cursor = monitorCollection.find({});
      const featured = await cursor.toArray();

      res.send({ status: true, data: featured });
    });

    app.get("/monitor/:id", async (req, res) => {
      console.log("inside monitor id ");
      const id = req.params.id;
      console.log(id);

      const result = await monitorCollection.findOne({
        _id: new ObjectId(id),
      });
      console.log(result);
      res.send(result);
    });

    app.get("/storages", async (req, res) => {
      console.log("inside psu");
      const cursor = storageCollection.find({});
      const featured = await cursor.toArray();

      res.send({ status: true, data: featured });
    });

    app.get("/storage/:id", async (req, res) => {
      console.log("inside sgtorage id ");
      const id = req.params.id;
      console.log(id);

      const result = await storageCollection.findOne({
        _id: new ObjectId(id),
      });
      console.log(result);
      res.send(result);
    });

    app.get("/cpus", async (req, res) => {
      console.log("inside cpu");
      const cursor = cpuCollection.find({});
      const featured = await cursor.toArray();

      res.send({ status: true, data: featured });
    });

    app.get("/cpu/:id", async (req, res) => {
      console.log("inside cpu id ");
      const id = req.params.id;
      console.log(id);

      const result = await cpuCollection.findOne({
        _id: new ObjectId(id),
      });
      console.log(result);
      res.send(result);
    });
    app.get("/others", async (req, res) => {
      console.log("inside other");
      const cursor = otherCollection.find({});
      const featured = await cursor.toArray();

      res.send({ status: true, data: featured });
    });

    app.get("/other/:id", async (req, res) => {
      console.log("inside other id ");
      const id = req.params.id;
      console.log(id);

      const result = await otherCollection.findOne({
        _id: new ObjectId(id),
      });
      console.log(result);
      res.send(result);
    });

    app.post("/featured", async (req, res) => {
      console.log("feature  post ");
      const featured = req.body;

      const result = await featuredCollection.insertOne(featured);

      res.send(result);
    });

    app.get("/featured/:id", async (req, res) => {
      console.log("inside featured id ");
      const id = req.params.id;
      console.log(id);

      const result = await featuredCollection.findOne({
        _id: new ObjectId(id),
      });
      console.log(result);
      res.send(result);
    });

    app.get("/motherboards", async (req, res) => {
      console.log("inside mother");
      const cursor = motherboardCollection.find({});
      const motherboard = await cursor.toArray();

      res.send({ status: true, data: motherboard });
    });

    app.get("/motherboard/:id", async (req, res) => {
      console.log("inside mother id");
      const id = req.params.id;
      console.log(id);

      const result = await motherboardCollection.findOne({
        _id: new ObjectId(id),
      });
      console.log(result);
      res.send(result);
    });

    // app.delete("/book/:id", async (req, res) => {
    //   const id = req.params.id;

    //   const result = await bookCollection.deleteOne({ _id: new ObjectId(id) });
    //   console.log(result);
    //   res.send(result);
    // });

    // app.post("/comment/:id", async (req, res) => {
    //   const bookId = req.params.id;
    //   const comment = req.body.comment;

    //   console.log(bookId);
    //   console.log(comment);

    //   const result = await bookCollection.updateOne(
    //     { _id: new ObjectId(bookId) },
    //     { $push: { comments: comment } }
    //   );

    //   console.log(result);

    //   if (result.modifiedCount !== 1) {
    //     console.error("book not found or comment not added");
    //     res.json({ error: "book not found or comment not added" });
    //     return;
    //   }

    //   console.log("Comment added successfully");
    //   res.json({ message: "Comment added successfully" });
    // });

    // app.get("/comment/:id", async (req, res) => {
    //   const bookId = req.params.id;

    //   const result = await bookCollection.findOne(
    //     { _id: new ObjectId(bookId) },
    //     { projection: { _id: 0, comments: 1 } }
    //   );

    //   if (result) {
    //     res.json(result);
    //   } else {
    //     res.status(404).json({ error: "book not found" });
    //   }
    // });

    // app.post("/user", async (req, res) => {
    //   const user = req.body;

    //   const result = await userCollection.insertOne(user);

    //   res.send(result);
    // });

    // app.get("/user/:email", async (req, res) => {
    //   const email = req.params.email;

    //   const result = await userCollection.findOne({ email });

    //   if (result?.email) {
    //     return res.send({ status: true, data: result });
    //   }

    //   res.send({ status: false });
    // });
  } finally {
  }
};

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  console.log("hello");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
