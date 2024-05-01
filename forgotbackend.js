const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
mongoose.set('strictQuery', true);

console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const User = mongoose.model("User", new mongoose.Schema({
  email: String,
  password: String,
}));

app.use(express.json());

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found.");
    }

    
    res.status(200).send("Password reset link sent.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send password reset link.");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});