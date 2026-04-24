const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/teamDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const memberSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  image: String
});

const Member = mongoose.model("Member", memberSchema);

// Multer Setup (for image upload)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  }
});

const upload = multer({ storage });

// Routes

// Add Member
app.post("/members", upload.single("image"), async (req, res) => {
  try {
    const { name, role, email } = req.body;

    const newMember = new Member({
      name,
      role,
      email,
      image: req.file ? req.file.filename : ""
    });

    await newMember.save();
    res.json(newMember);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Members
app.get("/members", async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

// Get Single Member
app.get("/members/:id", async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

// Server Start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});