const mongoose = require('mongoose');
const MonthWeather = require('./models/MonthWeather');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const months = [
  { month: "October", high: 33, low: 22, rainDays: 2, recommendedStay: "1-2 days" },
  { month: "November", high: 29, low: 18, rainDays: 1, recommendedStay: "1-2 days" },
  { month: "December", high: 21, low: 9, rainDays: 2, recommendedStay: "1-2 days" },
  { month: "January", high: 20, low: 10, rainDays: 3, recommendedStay: "2 days" },
  { month: "February", high: 23, low: 11, rainDays: 3, recommendedStay: "2 days" },
  { month: "March", high: 29, low: 16, rainDays: 3, recommendedStay: "2 days" }
];

async function seedWeather() {
  await MonthWeather.deleteMany({});
  await MonthWeather.insertMany(months);
  console.log("Weather data inserted!");
  mongoose.connection.close();
}

seedWeather();