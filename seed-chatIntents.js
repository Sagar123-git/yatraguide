const mongoose = require('mongoose');
const ChatIntent = require('../models/ChatIntent');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Connection Error:", err));

const intents = [
  {
    keywords: ['barsana', 'guide'],
    reply: 'Verified guides in Barsana: Meera (4.6⭐), Ramesh (4.8⭐)'
  },
  {
    keywords: ['mathura', 'guide'],
    reply: 'Verified guides in Mathura: Radha (4.7⭐), Mohan (4.5⭐)'
  },
  {
    keywords: ['combo', 'discount'],
    reply: '🎁 Book Package + Hotel + Guide to get 10% OFF! Valid for verified Aadhaar guides only.'
  },
  {
    keywords: ['best time', 'weather'],
    reply: '🌤️ Best time to visit Mathura is October to March — especially during Holi and Kartik month.'
  },
  {
    keywords: ['places', 'visit'],
    reply: '🛕 Top places: Krishna Janmabhoomi, Dwarkadhish Temple, Vishram Ghat, Barsana, Govardhan.'
  },
  {
    keywords: ['hotel', 'stay'],
    reply: '🏨 We offer budget and premium hotels near ghats and temples. Visit the Hotels section for details.'
  },
  {
    keywords: ['package', 'tour'],
    reply: '📦 Our packages include verified guides, multi-city options, and spiritual itineraries.'
  }
];

async function seedIntents() {
  try {
    await ChatIntent.deleteMany({});
    await ChatIntent.insertMany(intents);
    console.log("🚀 Chatbot intents inserted!");
  } catch (err) {
    console.log("❌ Seeding Error:", err);
  } finally {
    mongoose.connection.close();
  }
}

seedIntents();