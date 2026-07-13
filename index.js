const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Lei Xing Backend Working Hai!');
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: "Name, Email aur Message zaroori hai" 
    });
  }

  console.log("📩 New Contact Form:", { name, email, message });

  res.json({ 
    success: true, 
    message: "Thank you! Message receive ho gaya." 
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server chal raha hai port ${PORT} par`);
});