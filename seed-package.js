const mongoose = require('mongoose');
const Package = require('./models/Package');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Package.deleteMany({});
  await Package.insertMany([
    
  {
    title: "Agra Mathura Vrindavan Tour",
    duration: "3 Nights / 4 Days",
    destinations: ["Agra", "Mathura", "Vrindavan"],
    highlights: ["Taj Mahal", "Banke Bihari Temple", "Evening Aarti"],
    price: 12500,
    image: "/images/agra-mathura.jpg"
  },
  {
    title: "Delhi Jaipur Mathura Tour",
    duration: "4 Nights / 5 Days",
    destinations: ["Delhi", "Jaipur", "Mathura"],
    highlights: ["Amber Fort", "India Gate", "Krishna Janmabhoomi"],
    price: 14000,
    image: "/images/delhi-jaipur.jpg"
  },
  {
    title: "Barsana Govardhan Gokul Tour",
    duration: "2 Nights / 3 Days",
    destinations: ["Barsana", "Govardhan", "Gokul"],
    highlights: ["Radha Rani Mandir", "Parikrama", "Gokul Dham"],
    price: 10000,
    image: "/images/barsana-gokul.jpg"
  }
]
  );
  console.log("✅ Packages seeded");
  mongoose.disconnect();
});