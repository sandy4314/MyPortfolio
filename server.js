import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});
const Contact = mongoose.model('Contact', contactSchema);

// ✅ Default Route for Root URL
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// ✅ Add a GET route for `/contact` to test the database
app.get("/contact", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching contacts" });
  }
});

// ✅ POST route to save messages
app.post('/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Message saved!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving message" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
