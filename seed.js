const mongoose = require('mongoose');
const Package = require('./models/Package');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const packages = [
  {
    title: "Agra Mathura Vrindavan Tour",
    duration: "3 Nights / 4 Days",
    destinations: ["Agra", "Mathura", "Vrindavan"],
    highlights: ["Banke Bihari Temple", "Taj Mahal", "Prem Mandir"],
    price: 12500,
    image: "/images/agra-mathura.jpg"
  }
];

async function seedDB() {
  await Package.deleteMany({});
  await Package.insertMany(packages);
  console.log("Package inserted!");
  mongoose.connection.close();
}

seedDB();