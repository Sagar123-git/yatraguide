const mongoose = require('mongoose');
const Place = require('./models/Places');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const places = [
  {
    name: "Shri Krishna Janmasthan Temple",
    category: "Temple",
    description: "Birthplace of Lord Krishna, a sacred pilgrimage site.",
    image: "/images/janmasthan.jpg",
    rating: 4.8
  },
  {
    name: "Dwarkadhish Temple",
    category: "Temple",
    description: "Famous for its beautiful architecture and Krishna worship.",
    image: "/images/dwarkadhish.jpg",
    rating: 4.7
  },
  {
    name: "Vishram Ghat",
    category: "Ghat",
    description: "Holy bathing ghat on the Yamuna river, known for evening aarti.",
    image: "/images/vishram-ghat.jpg",
    rating: 4.6
  }
];

async function seedPlaces() {
  await Place.deleteMany({});
  await Place.insertMany(places);
  console.log("Places inserted!");
  mongoose.connection.close();
}

seedPlaces();