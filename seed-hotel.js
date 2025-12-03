const mongoose = require('mongoose');
const Hotel = require('./models/Hotel');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const hotels = [
  {
    name: "Hotel Aryavillas",
    price: 5719,
    rating: 8.5,
    distance: "0.4 km from Mathura Junction",
    amenities: ["WiFi", "Parking", "Room Service"],
    image: "/images/aryavillas.jpg"
  },
  {
    name: "Hotel Brijwasi Lands Inn",
    price: 1555,
    rating: 3.7,
    distance: "1.6 km from Mathura Junction",
    amenities: ["WiFi", "Food", "AC"],
    image: "/images/brijwasi.jpg"
  }
];

async function seedHotels() {
  await Hotel.deleteMany({});
  await Hotel.insertMany(hotels);
  console.log("Hotels inserted!");
  mongoose.connection.close();
}

seedHotels();