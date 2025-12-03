const mongoose = require('mongoose');
const Route = require('./models/Route');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const routes = [
  { from: "Delhi", to: "Mathura", distance: "183 km", time: "2 hr 52 min", transport: "Train / Car / Bus" },
  { from: "Agra", to: "Mathura", distance: "58 km", time: "1 hr 25 min", transport: "Car / Bus" },
  { from: "Varanasi", to: "Mathura", distance: "658 km", time: "4 hr 45 min", transport: "Train / Flight" },
  { from: "Lucknow", to: "Mathura", distance: "366 km", time: "5 hr 4 min", transport: "Train / Car" }
];

async function seedRoutes() {
  await Route.deleteMany({});
  await Route.insertMany(routes);
  console.log("Routes inserted!");
  mongoose.connection.close();
}

seedRoutes();